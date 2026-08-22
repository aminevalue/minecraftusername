export type UsernameLookupStatus =
  | "taken"
  | "available"
  | "invalid"
  | "rate_limited"
  | "error";

export interface UsernameLookupResult {
  status: UsernameLookupStatus;
  username: string;
  uuid?: string;
  exactName?: string;
}

const USERNAME_FORMAT = /^[A-Za-z0-9_]{3,16}$/;

// Best-effort per-instance cache. Serverless instances are ephemeral, so this
// only dedupes bursts of repeat lookups within the same warm instance — it is
// not a source of truth and is never used to fabricate a result.
const CACHE_TTL_MS = 60_000;
const cache = new Map<string, { result: UsernameLookupResult; expires: number }>();

export function isValidUsernameFormat(username: string): boolean {
  return USERNAME_FORMAT.test(username);
}

export async function lookupUsername(rawUsername: string): Promise<UsernameLookupResult> {
  const username = rawUsername.trim();

  if (!isValidUsernameFormat(username)) {
    return { status: "invalid", username };
  }

  const cacheKey = username.toLowerCase();
  const cached = cache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return cached.result;
  }

  let result: UsernameLookupResult;

  try {
    const res = await fetch(
      `https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(username)}`,
      {
        headers: { Accept: "application/json" },
        cache: "no-store",
      }
    );

    if (res.status === 200) {
      const data = (await res.json()) as { id?: string; name?: string };
      result = {
        status: "taken",
        username,
        uuid: data.id,
        exactName: data.name,
      };
    } else if (res.status === 404) {
      result = { status: "available", username };
    } else if (res.status === 429) {
      result = { status: "rate_limited", username };
    } else {
      result = { status: "error", username };
    }
  } catch {
    result = { status: "error", username };
  }

  if (result.status === "taken" || result.status === "available") {
    cache.set(cacheKey, { result, expires: Date.now() + CACHE_TTL_MS });
  }

  return result;
}
