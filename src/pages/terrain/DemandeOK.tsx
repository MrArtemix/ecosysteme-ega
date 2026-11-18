import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Terrain, Demande enregistrée — maquette « Terrain-Demande-OK.dc.html ». */
export default function TerrainDemandeOK() {
  useDocumentTitle('EGA Terrain, Demande enregistrée');
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
              alignItems: 'center',
              gap: '12px',
              padding: '24px 8px 8px',
              textAlign: 'center',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--color-warning-bg)',
                color: 'var(--color-warning-text)',
              }}
            >
              <Icon name="clock" size={40} />
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                fontSize: '24px',
                fontWeight: '700',
                color: 'var(--color-primary)',
              }}
            >
              Demande enregistrée
            </span>
            <span style={{ fontSize: '15px', color: 'var(--color-text-muted)' }}>
              Vous êtes hors-ligne. Elle est gardée sur le téléphone et partira dès que le réseau revient.
            </span>
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
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Chantier</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>Chantier Marcory</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Articles</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>2</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Statut</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>
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
              </span>
            </div>
          </div>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
              <Icon name="home" />
              Retour à l'accueil
            </Link>
            <Link
              to="/terrain/file"
              style={{
                boxSizing: 'border-box',
                textDecoration: 'none',
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                minHeight: '48px',
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
              Voir la file d'envoi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
