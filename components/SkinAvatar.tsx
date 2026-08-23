const SKIN_AVATAR_SIZE = 56;
const SKIN_TEXTURE_WIDTH = 64;

export default function SkinAvatar({
  skinUrl,
  name,
  className = "border-slate-200",
}: {
  skinUrl: string;
  name: string;
  className?: string;
}) {
  const scale = SKIN_AVATAR_SIZE / 8;
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-md border bg-white ${className}`}
      style={{ width: SKIN_AVATAR_SIZE, height: SKIN_AVATAR_SIZE }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- cropped via inline transform, next/image can't do this */}
      <img
        src={skinUrl}
        alt={`Current Minecraft skin for ${name}`}
        style={{
          maxWidth: "none",
          width: SKIN_TEXTURE_WIDTH * scale,
          height: "auto",
          imageRendering: "pixelated",
          transform: `translate(-${8 * scale}px, -${8 * scale}px)`,
        }}
      />
    </div>
  );
}
