type LogoProps = {
  size?: number;
  radius?: number;
  fontSize?: number;
  /** « surface » sur fond bleu nuit, « primary » sur fond clair. */
  tone?: 'surface' | 'primary';
};

/** Pastille « EGA ». */
export function Logo({ size = 36, radius = 8, fontSize = 12, tone = 'surface' }: LogoProps) {
  const inverse = tone === 'primary';
  return (
    <div
      role="img"
      aria-label="EGA"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flex: 'none',
        borderRadius: radius,
        background: inverse ? 'var(--color-primary)' : 'var(--color-surface)',
        color: inverse ? 'var(--color-on-primary)' : 'var(--color-primary)',
        fontFamily: 'var(--font-display)',
        fontSize,
        fontWeight: 700,
        letterSpacing: '0.01em',
      }}
    >
      EGA
    </div>
  );
}
