import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Terrain, Demandes — maquette « Terrain-Demandes.dc.html ». */
export default function TerrainDemandes() {
  useDocumentTitle('EGA Terrain, Demandes');
  return (
    <div className="mobile-stage">
      <div
        style={{
          position: 'relative',
          width: 'var(--mobile-frame-width)',
          height: 'var(--mobile-frame-height)',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: 'var(--color-primary)',
          color: 'var(--color-text)',
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        <header
          style={{
            position: 'relative',
            height: '64px',
            flex: 'none',
            boxSizing: 'border-box',
            padding: '0 16px',
            overflow: 'hidden',
            color: 'var(--color-on-primary)',
          }}
        >
          <Pattern variant="header" style={{ position: 'absolute', right: '-8px', top: '-6px' }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', height: '64px' }}>
            <Logo size={32} radius={8} fontSize={11} />
            <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <h1
                style={{
                  margin: '0',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '17px',
                  fontWeight: '700',
                  color: 'var(--color-on-primary)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Demandes
              </h1>
            </div>
            <span
              style={{ display: 'inline-flex', flex: 'none', borderRadius: '16px', background: 'var(--color-surface)' }}
            >
              <Link
                to="/terrain/file"
                style={{
                  boxSizing: 'border-box',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  minHeight: '32px',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  border: '0',
                  background: 'var(--color-warning-bg)',
                  color: 'var(--color-warning-text)',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                <Icon name="clock" size={14} />1 en attente
              </Link>
            </span>
          </div>
        </header>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '4px 16px 20px',
            color: 'var(--color-on-primary)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.10)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '22px',
                  fontWeight: '700',
                  lineHeight: '1.15',
                }}
              >
                1
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Validée</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.10)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '22px',
                  fontWeight: '700',
                  lineHeight: '1.15',
                }}
              >
                1
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>En transit</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.10)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '22px',
                  fontWeight: '700',
                  lineHeight: '1.15',
                }}
              >
                1
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>À envoyer</span>
            </div>
          </div>
        </div>
        <main
          style={{
            flex: '1',
            minHeight: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '20px 16px 0',
            overflow: 'hidden',
            background: 'var(--color-background)',
            borderRadius: '16px 16px 0 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--color-surface)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                }}
              >
                <Icon name="check" size={16} />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: '500' }}>
                    BS-2026-0047
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  2 onduleurs 5 kVA, aujourd'hui 10:32
                </span>
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 10px 3px 8px',
                  borderRadius: '16px',
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                  fontSize: '12px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
              >
                <Icon name="check" size={14} />
                Validé
              </span>
            </div>
            <Link
              to="/terrain/file"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
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
                  width: '36px',
                  height: '36px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-warning-bg)',
                  color: 'var(--color-warning-text)',
                }}
              >
                <Icon name="arrowUp" size={16} />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>10 disjoncteurs 20 A</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  Aujourd'hui 08:40, pas encore envoyée
                </span>
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 10px 3px 8px',
                  borderRadius: '16px',
                  background: 'var(--color-warning-bg)',
                  color: 'var(--color-warning-text)',
                  fontSize: '12px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
              >
                <Icon name="clock" size={14} />
                En attente d'envoi
              </span>
            </Link>
            <Link
              to="/terrain/bon"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
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
                  width: '36px',
                  height: '36px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-warning-bg)',
                  color: 'var(--color-warning-text)',
                }}
              >
                <Icon name="truck" size={16} />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: '500' }}>
                    BS-2026-0042
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  Gaine ICTA Ø20, 40 pce, aujourd'hui 09:12
                </span>
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 10px 3px 8px',
                  borderRadius: '16px',
                  background: 'var(--color-warning-bg)',
                  color: 'var(--color-warning-text)',
                  fontSize: '12px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
              >
                <Icon name="truck" size={14} />
                En transit
              </span>
            </Link>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <Icon name="offline" size={16} />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: '500' }}>
                    BS-2026-0039
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  Annulée par l'administrateur, hier
                </span>
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 10px 3px 8px',
                  borderRadius: '16px',
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                  fontSize: '12px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
              >
                <Icon name="offline" size={14} />
                Annulé
              </span>
            </div>
          </div>
          <p style={{ margin: '0', fontSize: '12px', color: 'var(--color-text-muted)' }}>
            Vos demandes des 30 derniers jours, la plus récente en premier.
          </p>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <Link
            to="/terrain/demande-chantier"
            style={{
              boxSizing: 'border-box',
              textDecoration: 'none',
              width: '100%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              minHeight: '56px',
              padding: '0 16px',
              borderRadius: '10px',
              fontFamily: 'inherit',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              background: 'var(--color-accent)',
              color: 'var(--color-primary)',
              border: '1px solid var(--color-accent)',
              boxShadow: 'var(--shadow-accent)',
            }}
          >
            <Icon name="plus" />
            Nouvelle demande
          </Link>
        </div>
        <nav
          aria-label="Navigation principale"
          style={{
            display: 'flex',
            padding: '0 4px',
            background: 'var(--color-surface)',
            boxShadow: '0 -1px 0 var(--color-border), 0 -8px 24px rgba(15,41,66,0.06)',
          }}
        >
          <Link
            to="/terrain/accueil"
            style={{
              position: 'relative',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              minHeight: '64px',
              color: 'var(--color-text-muted)',
              fontSize: '11px',
              fontWeight: '500',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '28px',
                borderRadius: '16px',
                background: 'transparent',
              }}
            >
              <Icon name="home" />
            </span>
            Accueil
          </Link>
          <Link
            to="/terrain/demandes"
            aria-current="page"
            style={{
              position: 'relative',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              minHeight: '64px',
              color: 'var(--color-primary)',
              fontSize: '11px',
              fontWeight: '700',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '28px',
                borderRadius: '16px',
                background: 'var(--color-accent-soft)',
                color: 'var(--color-primary)',
              }}
            >
              <Icon name="list" />
            </span>
            Demandes
          </Link>
          <Link
            to="/terrain/bons"
            style={{
              position: 'relative',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              minHeight: '64px',
              color: 'var(--color-text-muted)',
              fontSize: '11px',
              fontWeight: '500',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '28px',
                borderRadius: '16px',
                background: 'transparent',
              }}
            >
              <Icon name="document" />
            </span>
            Bons
          </Link>
          <Link
            to="/terrain/plus"
            style={{
              position: 'relative',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              minHeight: '64px',
              color: 'var(--color-text-muted)',
              fontSize: '11px',
              fontWeight: '500',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '28px',
                borderRadius: '16px',
                background: 'transparent',
              }}
            >
              <Icon name="more" />
            </span>
            Plus
          </Link>
        </nav>
      </div>
    </div>
  );
}
