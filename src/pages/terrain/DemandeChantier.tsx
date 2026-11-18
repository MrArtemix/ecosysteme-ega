import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Terrain, Nouvelle demande, chantier — maquette « Terrain-Demande-Chantier.dc.html ». */
export default function TerrainDemandeChantier() {
  useDocumentTitle('EGA Terrain, Nouvelle demande, chantier');
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
                Nouvelle demande
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
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                <Icon name="offline" size={14} />
                Hors-ligne
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
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '20px',
                fontWeight: '700',
              }}
            >
              Chantier
            </span>
            <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Étape 1 sur 4</span>
          </div>
          <div
            aria-hidden="true"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '6px' }}
          >
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'rgba(255,255,255,0.18)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'rgba(255,255,255,0.18)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'rgba(255,255,255,0.18)' }}></div>
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
              Chantiers actifs
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
            <Link
              to="/terrain/demande-articles"
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
                  width: '40px',
                  height: '40px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-accent-soft)',
                  color: 'var(--color-primary)',
                }}
              >
                <Icon name="mapPin" />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>Chantier Marcory</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Votre chantier habituel</span>
              </span>
              <Icon name="chevronRight" style={{ color: 'var(--color-text-muted)' }} />
            </Link>
            <Link
              to="/terrain/demande-articles"
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
                  width: '40px',
                  height: '40px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <Icon name="mapPin" />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>Chantier Riviera 4</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Chantier actif</span>
              </span>
              <Icon name="chevronRight" style={{ color: 'var(--color-text-muted)' }} />
            </Link>
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
              Choisissez le chantier qui recevra le matériel. Il est rappelé dans le récapitulatif avant l'envoi.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
