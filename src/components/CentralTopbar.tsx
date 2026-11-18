import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, type IconName } from './Icon';

type Notification = { to: string; title: string; detail: string; icon: IconName; tone: 'warning' | 'neutral' };

const notifications: Notification[] = [
  {
    to: '/central/preparation',
    title: 'Sortie à préparer',
    detail: 'BS-2026-0042, Chantier Marcory, 09:20',
    icon: 'arrowUp',
    tone: 'warning',
  },
  {
    to: '/central/retours',
    title: 'Retour annoncé',
    detail: '35 m de câble, Chantier Marcory, 09:55',
    icon: 'refresh',
    tone: 'neutral',
  },
];

const tones = {
  warning: { background: 'var(--color-warning-bg)', color: 'var(--color-warning-text)' },
  neutral: { background: 'var(--color-neutral-bg)', color: 'var(--color-text-muted)' },
};

type CentralTopbarProps = {
  /** Fil d'Ariane après « EGA Central / ». */
  breadcrumb: string;
  title: string;
};

/** En-tête des écrans d'EGA Central : titre, recherche globale, état réseau, notifications. */
export function CentralTopbar({ breadcrumb, title }: CentralTopbarProps) {
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 16,
        minHeight: 64,
        boxSizing: 'border-box',
        padding: '10px 28px',
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
        <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>EGA Central / {breadcrumb}</span>
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.01em',
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--color-primary)',
          }}
        >
          {title}
        </h1>
      </div>
      <div
        style={{
          flex: '1 1 240px',
          maxWidth: 340,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: 38,
          boxSizing: 'border-box',
          padding: '0 12px',
          borderRadius: 10,
          background: 'var(--color-background)',
          color: 'var(--color-text-muted)',
        }}
      >
        <Icon name="search" size={16} />
        <label htmlFor="g-search" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden' }}>
          Recherche globale
        </label>
        <input
          id="g-search"
          type="search"
          placeholder="SKU, nom ou référence"
          style={{
            flex: 1,
            minWidth: 0,
            border: 0,
            outline: 0,
            background: 'transparent',
            fontFamily: 'inherit',
            fontSize: 14,
            color: 'var(--color-text)',
          }}
        />
        <span
          style={{
            padding: '2px 6px',
            borderRadius: 6,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          Ctrl F
        </span>
      </div>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          padding: '4px 12px',
          borderRadius: 16,
          background: 'var(--color-success-bg)',
          color: 'var(--color-success-text)',
          fontSize: 13,
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}
      >
        <Icon name="check" size={14} />
        En ligne
      </span>
      <button
        type="button"
        aria-label={`Notifications, ${notifications.length} non lues`}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 38,
          height: 38,
          borderRadius: 10,
          background: 'var(--color-background)',
          color: 'var(--color-primary)',
          border: 0,
          cursor: 'pointer',
        }}
      >
        <Icon name="bell" size={18} />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 8,
            right: 9,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--color-accent)',
            border: '2px solid var(--color-background)',
          }}
        />
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Notifications"
          style={{
            position: 'absolute',
            top: 58,
            right: 28,
            zIndex: 20,
            width: 340,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            padding: 12,
            background: 'var(--color-surface)',
            borderRadius: 16,
            boxShadow: 'var(--shadow-popover)',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 8px 8px' }}
          >
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-primary)' }}>Notifications</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                minHeight: 32,
                padding: '0 8px',
                border: 0,
                background: 'transparent',
                color: 'var(--color-accent-text)',
                fontFamily: 'inherit',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Fermer
            </button>
          </div>
          {notifications.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 12px',
                borderRadius: 10,
                color: 'var(--color-text)',
                textDecoration: 'none',
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
                  borderRadius: 10,
                  ...tones[n.tone],
                }}
              >
                <Icon name={n.icon} size={16} />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                <span style={{ fontWeight: 600 }}>{n.title}</span>
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{n.detail}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
