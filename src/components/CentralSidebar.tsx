import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Icon, type IconName } from './Icon';
import { Logo } from './Logo';
import { Pattern } from './Pattern';

type Item = { to: string; label: string; icon: IconName };
type Group = { title: string; items: Item[]; adminOnly?: boolean };

const groups: Group[] = [
  {
    title: 'Opérations',
    items: [
      { to: '/central/tableau-de-bord', label: 'Tableau de bord', icon: 'grid' },
      { to: '/central/stock', label: 'Stock', icon: 'box' },
      { to: '/central/entree', label: 'Entrées', icon: 'arrowDown' },
      { to: '/central/mouvements', label: 'Sorties', icon: 'arrowUp' },
      { to: '/central/retours', label: 'Retours', icon: 'refresh' },
      { to: '/central/transferts', label: 'Transferts', icon: 'transfer' },
      { to: '/central/ajustements', label: 'Ajustements', icon: 'sliders' },
    ],
  },
  {
    title: 'Référentiel',
    adminOnly: true,
    items: [
      { to: '/central/catalogue', label: 'Catalogue', icon: 'tag' },
      { to: '/central/sites', label: 'Sites', icon: 'mapPin' },
      { to: '/central/utilisateurs', label: 'Utilisateurs', icon: 'user' },
    ],
  },
  {
    title: 'Contrôle',
    adminOnly: true,
    items: [
      { to: '/central/audit', label: 'Audit', icon: 'shield' },
      { to: '/central/exports', label: 'Exports', icon: 'download' },
    ],
  },
];

const accounts = {
  admin: { initials: 'AD', login: 'admin.test', role: 'Administrateur' },
  magasinier: { initials: 'M1', login: 'mag1.test', role: 'Magasinier' },
};

const linkStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  minHeight: 38,
  padding: '0 12px',
  borderRadius: 8,
  color: 'var(--color-on-primary)',
  textDecoration: 'none',
  fontWeight: 500,
};

const activeStyle: CSSProperties = {
  ...linkStyle,
  background: 'rgba(255,255,255,0.12)',
  fontWeight: 600,
  boxShadow: 'inset 3px 0 0 var(--color-accent)',
};

type CentralSidebarProps = {
  /** Route de l'entrée de menu active. */
  active: string;
  /** Le magasinier ne voit que les opérations. */
  role: keyof typeof accounts;
};

/** Barre latérale des modules d'EGA Central. */
export function CentralSidebar({ active, role }: CentralSidebarProps) {
  const account = accounts[role];
  return (
    <nav
      aria-label="Modules"
      style={{
        flex: '1 0 248px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '20px 14px',
        background: 'var(--color-primary)',
        color: 'var(--color-on-primary)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 8px 8px' }}>
        <Logo />
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>EGA Central</span>
          <span style={{ fontSize: 12, color: 'var(--color-on-primary-muted)' }}>Gestion de stock</span>
        </span>
      </div>
      {groups
        .filter((g) => role === 'admin' || !g.adminOnly)
        .map((g) => (
          <div key={g.title} style={{ display: 'contents' }}>
            <span
              style={{
                padding: '16px 12px 6px',
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--color-on-primary-muted)',
              }}
            >
              {g.title}
            </span>
            {g.items.map((item) => {
              const current = item.to === active;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={current ? 'page' : undefined}
                  style={current ? activeStyle : linkStyle}
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      <div style={{ marginTop: 'auto', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Pattern variant="footer" style={{ display: 'block', margin: '0 auto' }} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: 12,
            borderRadius: 10,
            background: 'rgba(255,255,255,0.08)',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              flex: 'none',
              borderRadius: '50%',
              background: 'var(--color-accent)',
              color: 'var(--color-primary)',
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {account.initials}
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3, minWidth: 0 }}>
            <span style={{ fontWeight: 600 }}>{account.login}</span>
            <span style={{ fontSize: 12, color: 'var(--color-on-primary-muted)' }}>{account.role}</span>
          </span>
          <Link
            to="/central/connexion"
            aria-label="Se déconnecter"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              marginLeft: 'auto',
              flex: 'none',
              borderRadius: 8,
              color: 'var(--color-on-primary)',
            }}
          >
            <Icon name="lock" size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
