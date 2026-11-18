import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Terrain, Détail d'un bon — maquette « Terrain-Bon.dc.html ». */
export default function TerrainBon() {
  useDocumentTitle("EGA Terrain, Détail d'un bon");
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
            <Link
              to="/terrain/bons"
              aria-label="Retour"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '48px',
                marginLeft: '-12px',
                flex: 'none',
                color: 'var(--color-on-primary)',
              }}
            >
              <Icon name="chevronLeft" size={24} />
            </Link>
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
                Bon de sortie
              </h1>
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--color-on-primary-muted)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                  BS-2026-0042
                </span>
              </span>
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
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                <Icon name="check" size={14} />
                En ligne
              </Link>
            </span>
          </div>
        </header>
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
              gap: '8px',
              padding: '16px',
              background: 'var(--color-surface)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <ol
              aria-label="Avancement du bon"
              style={{
                margin: '0',
                padding: '0',
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              }}
            >
              <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <span style={{ flex: '1', height: '2px', background: 'transparent' }}></span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      flex: 'none',
                      borderRadius: '50%',
                      background: 'var(--color-success)',
                      color: 'var(--color-on-primary)',
                    }}
                  >
                    <Icon name="check" size={12} />
                  </span>
                  <span style={{ flex: '1', height: '2px', background: 'var(--color-success)' }}></span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
                  Demande
                </span>
              </li>
              <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <span style={{ flex: '1', height: '2px', background: 'var(--color-success)' }}></span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      flex: 'none',
                      borderRadius: '50%',
                      background: 'var(--color-success)',
                      color: 'var(--color-on-primary)',
                    }}
                  >
                    <Icon name="check" size={12} />
                  </span>
                  <span style={{ flex: '1', height: '2px', background: 'var(--color-success)' }}></span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
                  Validé
                </span>
              </li>
              <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <span style={{ flex: '1', height: '2px', background: 'var(--color-success)' }}></span>
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      flex: 'none',
                      boxSizing: 'border-box',
                      borderRadius: '50%',
                      background: 'var(--color-surface)',
                      border: '6px solid var(--color-accent)',
                    }}
                  ></span>
                  <span style={{ flex: '1', height: '2px', background: 'var(--color-border)' }}></span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
                  En transit
                </span>
              </li>
              <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <span style={{ flex: '1', height: '2px', background: 'var(--color-border)' }}></span>
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      flex: 'none',
                      boxSizing: 'border-box',
                      borderRadius: '50%',
                      background: 'var(--color-surface)',
                      border: '2px solid var(--color-border)',
                    }}
                  ></span>
                  <span style={{ flex: '1', height: '2px', background: 'transparent' }}></span>
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'var(--color-text-muted)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Reçu
                </span>
              </li>
            </ol>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '16px',
              background: 'var(--color-surface)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Départ</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>Dépôt Principal EGA</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Destination</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>Chantier Marcory</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Expédié</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>14/11/2026 à 10:05</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <h2
              style={{
                margin: '0',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '17px',
                fontWeight: '600',
              }}
            >
              Articles attendus
            </h2>
          </div>
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
                  width: '40px',
                  height: '40px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <Icon name="box" />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>Gaine ICTA Ø20</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>PRD-002</span>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '20px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                }}
              >
                40 pce
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              padding: '12px 16px',
              borderRadius: '10px',
              background: 'var(--color-neutral-bg)',
              fontSize: '14px',
            }}
          >
            <Icon name="info" />
            <span>
              À l'arrivée du camion, comptez les articles, prenez une photo et faites signer le chef de chantier.
            </span>
          </div>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <Link
            to="/terrain/reception"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              minHeight: '56px',
              borderRadius: '10px',
              background: 'var(--color-accent)',
              color: 'var(--color-primary)',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            <Icon name="check" />
            Réceptionner
          </Link>
        </div>
      </div>
    </div>
  );
}
