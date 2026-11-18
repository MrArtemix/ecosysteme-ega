import type { CSSProperties } from 'react';
import { patternShapes, type PatternVariant } from './patternShapes';

type PatternProps = {
  variant: PatternVariant;
  style?: CSSProperties;
};

/** Motif de carreaux EGA, décoratif (en-têtes, pied de barre latérale, connexion). */
export function Pattern({ variant, style }: PatternProps) {
  const { width, height, shapes } = patternShapes[variant];
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" style={style}>
      {shapes}
    </svg>
  );
}
