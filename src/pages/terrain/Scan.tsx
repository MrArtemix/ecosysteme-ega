import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Terrain, Scan — maquette « Terrain-Scan.dc.html ». */
export default function TerrainScan() {
  useDocumentTitle('EGA Terrain, Scan');
  return (
    <div className="mobile-stage">
      <div
        style={{
          width: 'var(--mobile-frame-width)',
          height: 'var(--mobile-frame-height)',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: 'var(--color-text)',
          color: 'var(--color-on-primary)',
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
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
            background: 'var(--color-primary)',
            color: 'var(--color-on-primary)',
          }}
        >
          <Pattern variant="header" style={{ position: 'absolute', right: '-8px', top: '-6px' }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', height: '64px' }}>
            <Link
              to="/terrain/demande-articles"
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
            <h1
              style={{
                flex: '1',
                margin: '0',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '17px',
                fontWeight: '600',
              }}
            >
              Scanner un article
            </h1>
            <button
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '44px',
                padding: '0 12px',
                borderRadius: '10px',
                background: 'transparent',
                color: 'var(--color-on-primary)',
                border: '1px solid #FFFFFF',
                fontFamily: 'inherit',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Lampe
            </button>
          </div>
        </header>
        <main
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '0 16px',
          }}
        >
          <Link
            to="/terrain/demande-articles"
            aria-label="Simuler une lecture et revenir aux articles"
            style={{
              display: 'block',
              position: 'relative',
              width: '280px',
              height: '280px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.06)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '44px',
                height: '44px',
                borderLeft: '4px solid var(--color-accent)',
                borderTop: '4px solid var(--color-accent)',
                borderRadius: '16px 0 0 0',
              }}
            ></span>
            <span
              style={{
                position: 'absolute',
                right: '0',
                top: '0',
                width: '44px',
                height: '44px',
                borderRight: '4px solid var(--color-accent)',
                borderTop: '4px solid var(--color-accent)',
                borderRadius: '0 16px 0 0',
              }}
            ></span>
            <span
              style={{
                position: 'absolute',
                left: '0',
                bottom: '0',
                width: '44px',
                height: '44px',
                borderLeft: '4px solid var(--color-accent)',
                borderBottom: '4px solid var(--color-accent)',
                borderRadius: '0 0 0 16px',
              }}
            ></span>
            <span
              style={{
                position: 'absolute',
                right: '0',
                bottom: '0',
                width: '44px',
                height: '44px',
                borderRight: '4px solid var(--color-accent)',
                borderBottom: '4px solid var(--color-accent)',
                borderRadius: '0 0 16px 0',
              }}
            ></span>
            <span
              style={{
                position: 'absolute',
                left: '24px',
                right: '24px',
                top: '139px',
                height: '2px',
                borderRadius: '2px',
                background: 'var(--color-accent)',
                boxShadow: '0 0 16px 2px rgba(245,124,0,0.6)',
              }}
            ></span>
          </Link>
          <p style={{ margin: '0', textAlign: 'center' }}>
            Placez le code-barres ou le QR code dans le cadre. La lecture est automatique.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 16px 10px 10px',
              borderRadius: '16px',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
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
            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontWeight: '600' }}>Disjoncteur 20 A ajouté</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                PRD-005, 2 articles dans la demande
              </span>
            </span>
          </div>
        </main>
        <div style={{ padding: '12px 16px 24px' }}>
          <Link
            to="/terrain/demande-articles"
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
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-text-muted)',
            }}
          >
            <Icon name="pencil" />
            Saisir le code à la main
          </Link>
        </div>
      </div>
    </div>
  );
}
