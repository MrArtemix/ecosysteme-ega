import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Central, Connexion — maquette « Central-Connexion.dc.html ». */
export default function CentralConnexion() {
  useDocumentTitle('EGA Central, Connexion');
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '100vh',
        background: 'var(--color-surface)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
      }}
    >
      <section
        style={{
          position: 'relative',
          flex: '1 1 480px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '48px',
          minHeight: '360px',
          padding: '48px 56px',
          overflow: 'hidden',
          background: 'var(--color-primary)',
          color: 'var(--color-on-primary)',
        }}
      >
        <Pattern variant="login" style={{ position: 'absolute', right: '-40px', bottom: '-40px' }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Logo size={48} radius={16} fontSize={16} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.25' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '20px',
                fontWeight: '700',
              }}
            >
              EGA Central
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-on-primary-muted)' }}>
              Énergies et Gaines d'Afrique
            </span>
          </span>
        </div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '440px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em',
              fontSize: '44px',
              fontWeight: '700',
              lineHeight: '1.08',
            }}
          >
            Un stock fiable, du dépôt au chantier.
          </span>
          <span style={{ fontSize: '16px', color: 'var(--color-on-primary-muted)' }}>
            Entrées, sorties, retours et preuves de livraison dans une seule source de vérité.
          </span>
          <ul
            style={{
              margin: '8px 0 0',
              padding: '0',
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  flex: 'none',
                  borderRadius: '8px',
                  background: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                }}
              >
                <Icon name="box" size={16} />
              </span>
              <span style={{ fontSize: '15px' }}>Chaque mouvement est tracé, rien ne s'efface.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  flex: 'none',
                  borderRadius: '8px',
                  background: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                }}
              >
                <Icon name="camera" size={16} />
              </span>
              <span style={{ fontSize: '15px' }}>Chaque livraison porte une photo et une signature.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  flex: 'none',
                  borderRadius: '8px',
                  background: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                }}
              >
                <Icon name="refresh" size={16} />
              </span>
              <span style={{ fontSize: '15px' }}>Le chantier continue de saisir sans réseau.</span>
            </li>
          </ul>
        </div>
      </section>
      <main
        style={{
          flex: '1 1 420px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 32px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h1
              style={{
                margin: '0',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                fontSize: '28px',
                fontWeight: '700',
                color: 'var(--color-primary)',
              }}
            >
              Connexion
            </h1>
            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
              Connectez-vous avec votre compte EGA.
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="c-id" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Identifiant
            </label>
            <input
              id="c-id"
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
            <label htmlFor="c-pw" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Mot de passe
            </label>
            <input
              id="c-pw"
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
          <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="c-lang" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Langue
            </label>
            <select
              id="c-lang"
              style={{
                boxSizing: 'border-box',
                width: '100%',
                height: '36px',
                padding: '0 12px',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                fontFamily: 'inherit',
                fontSize: '14px',
              }}
            >
              <option>Français</option>
            </select>
          </div>
          <Link
            to="/central/tableau-de-bord"
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
              fontSize: '15px',
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
          <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
            Mot de passe oublié ? Contactez votre administrateur.
          </span>
        </div>
      </main>
    </div>
  );
}
