import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Terrain, Connexion — maquette « Terrain-Connexion.dc.html ». */
export default function TerrainConnexion() {
  useDocumentTitle('EGA Terrain, Connexion');
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
          background: 'var(--color-primary)',
          color: 'var(--color-text)',
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
            color: 'var(--color-on-primary)',
          }}
        >
          <Pattern variant="header" style={{ position: 'absolute', right: '-8px', top: '-6px' }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', height: '64px' }}>
            <Logo size={32} radius={8} fontSize={11} />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '17px',
                fontWeight: '700',
              }}
            >
              EGA Terrain
            </span>
          </div>
        </header>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '28px 24px 36px',
            color: 'var(--color-on-primary)',
            overflow: 'hidden',
          }}
        >
          <Pattern variant="hero" style={{ position: 'absolute', right: '-24px', top: '-8px' }} />
          <span
            style={{
              position: 'relative',
              maxWidth: '230px',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '1.15',
            }}
          >
            Un stock fiable, du dépôt au chantier.
          </span>
          <span
            style={{
              position: 'relative',
              maxWidth: '230px',
              fontSize: '14px',
              color: 'var(--color-on-primary-muted)',
            }}
          >
            Demandes, réceptions et retours de chantier.
          </span>
        </div>
        <main
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '28px 24px',
            background: 'var(--color-surface)',
            borderRadius: '16px 16px 0 0',
          }}
        >
          <h1
            style={{
              margin: '0',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.01em',
              fontSize: '22px',
              fontWeight: '700',
              color: 'var(--color-primary)',
            }}
          >
            Connexion
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="ain-id" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Identifiant
            </label>
            <input
              id="ain-id"
              type="text"
              autoComplete="username"
              style={{
                boxSizing: 'border-box',
                width: '100%',
                height: '48px',
                padding: '0 12px',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                fontFamily: 'inherit',
                fontSize: '16px',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="ain-pw" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Mot de passe
            </label>
            <input
              id="ain-pw"
              type="password"
              autoComplete="current-password"
              style={{
                boxSizing: 'border-box',
                width: '100%',
                height: '48px',
                padding: '0 12px',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                fontFamily: 'inherit',
                fontSize: '16px',
              }}
            />
          </div>
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
            Se connecter
          </Link>
          <p style={{ margin: '0', fontSize: '12px', color: 'var(--color-text-muted)' }}>
            Dernière synchronisation : 14/11/2026 à 10:12. La première connexion sur ce téléphone demande du réseau.
          </p>
        </main>
      </div>
    </div>
  );
}
