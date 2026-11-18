import type { CSSProperties } from 'react';
import { iconPaths, type IconName } from './iconPaths';

export type { IconName };

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  style?: CSSProperties;
  /** Libellé accessible ; sans libellé, le pictogramme est décoratif. */
  label?: string;
};

/** Pictogrammes au trait du système EGA : grille 24 × 24, trait de 2 px, couleur du texte. */
export function Icon({ name, size = 20, strokeWidth = 2, style, label }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      style={{ flex: 'none', ...style }}
    >
      {iconPaths[name]}
    </svg>
  );
}
