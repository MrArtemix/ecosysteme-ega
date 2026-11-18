import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Terrain, Entrée à l'entrepôt — maquette « Terrain-Entree.dc.html ». */
export default function TerrainEntree() {
  useDocumentTitle("EGA Terrain, Entrée à l'entrepôt");
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
              to="/terrain/accueil"
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
                Entrée à l'entrepôt
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
                Dépôt Principal EGA
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
                2
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Articles</span>
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
                2
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Séries</span>
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
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Bordereau</span>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="te-fou" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Fournisseur
            </label>
            <select
              id="te-fou"
              style={{
                boxSizing: 'border-box',
                width: '100%',
                height: '48px',
                padding: '0 12px',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                fontFamily: 'inherit',
                fontSize: '16px',
              }}
            >
              <option>Fournisseur Test</option>
            </select>
          </div>
          <Link
            to="/terrain/scan"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minHeight: '56px',
              padding: '8px 16px 8px 10px',
              border: '2px dashed var(--color-accent)',
              borderRadius: '16px',
              background: 'rgba(245,124,0,0.08)',
              color: 'var(--color-primary)',
              textDecoration: 'none',
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
                background: 'rgba(245,124,0,0.20)',
                color: 'var(--color-primary)',
              }}
            >
              <Icon name="scan" />
            </span>
            <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontWeight: '700' }}>Scanner un article</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                Code-barres, QR code ou numéro de série
              </span>
            </span>
            <Icon name="chevronRight" />
          </Link>
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
              Articles scannés
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
                <span style={{ fontWeight: '500' }}>Câble R2V 3G2.5</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>PRD-001, 2 rouleaux</span>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '18px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                }}
              >
                200 m
              </span>
            </div>
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
                <span style={{ fontWeight: '500' }}>Onduleur 5 kVA</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>SN-OND-007, SN-OND-008</span>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '18px',
                    fontWeight: '700',
                    whiteSpace: 'nowrap',
                  }}
                >
                  2 pce
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
                  <Icon name="check" size={14} />2 séries
                </span>
              </span>
            </div>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                }}
              >
                <Icon name="document" />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontWeight: '600' }}>Bordereau fournisseur</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>1 photo jointe</span>
              </span>
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minHeight: '48px',
                  padding: '0 16px',
                  borderRadius: '10px',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-text-muted)',
                }}
              >
                Reprendre
              </button>
            </div>
          </div>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <Link
            to="/terrain/accueil"
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
            <Icon name="check" />
            Confirmer l'entrée
          </Link>
        </div>
      </div>
    </div>
  );
}
