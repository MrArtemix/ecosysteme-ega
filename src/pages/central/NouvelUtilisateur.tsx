import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Central, Nouvel utilisateur — maquette « Central-NouvelUtilisateur.dc.html ». */
export default function CentralNouvelUtilisateur() {
  useDocumentTitle('EGA Central, Nouvel utilisateur');
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '100vh',
        background: 'var(--color-background)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      <CentralSidebar active="/central/utilisateurs" role="admin" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Utilisateurs" title="Nouvel utilisateur" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ flex: '999 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <section
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '20px',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '17px',
                    fontWeight: '600',
                  }}
                >
                  Identité
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <div
                    style={{ flex: '1 1 260px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}
                  >
                    <label
                      htmlFor="nu-n"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Nom complet (obligatoire)
                    </label>
                    <input
                      id="nu-n"
                      type="text"
                      placeholder="Nom et prénom"
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
                    />
                  </div>
                  <div
                    style={{ flex: '1 1 200px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}
                  >
                    <label
                      htmlFor="nu-t"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Téléphone
                    </label>
                    <input
                      id="nu-t"
                      type="text"
                      placeholder="8 à 15 chiffres, avec indicatif"
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
                    />
                  </div>
                </div>
                <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="nu-i"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Identifiant de connexion
                  </label>
                  <input
                    id="nu-i"
                    type="text"
                    defaultValue="agent2.test"
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
                  />
                </div>
              </section>
              <section
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '20px',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '17px',
                    fontWeight: '600',
                  }}
                >
                  Rôle
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label
                    htmlFor="nu-r1"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '12px 14px',
                      border: '2px solid var(--color-accent)',
                      borderRadius: '10px',
                      background: 'rgba(245,124,0,0.08)',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      id="nu-r1"
                      type="radio"
                      name="nu-role"
                      defaultChecked
                      style={{ width: '16px', height: '16px', margin: '2px 0 0' }}
                    />
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontWeight: '600' }}>Terrain</span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                        Demande du matériel et confirme les réceptions. Ne voit aucun prix.
                      </span>
                    </span>
                  </label>
                  <label
                    htmlFor="nu-r2"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '12px 14px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      background: 'var(--color-surface)',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      id="nu-r2"
                      type="radio"
                      name="nu-role"
                      style={{ width: '16px', height: '16px', margin: '2px 0 0' }}
                    />
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontWeight: '600' }}>Magasinier</span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                        Reçoit, prépare et expédie. Ne voit pas les prix.
                      </span>
                    </span>
                  </label>
                  <label
                    htmlFor="nu-r3"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '12px 14px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      background: 'var(--color-surface)',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      id="nu-r3"
                      type="radio"
                      name="nu-role"
                      style={{ width: '16px', height: '16px', margin: '2px 0 0' }}
                    />
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontWeight: '600' }}>Administrateur</span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                        Gère catalogue, prix, sites, comptes, bons et exports.
                      </span>
                    </span>
                  </label>
                </div>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Un compte de direction ne peut être créé que par la direction.
                </span>
              </section>
            </div>
            <aside style={{ flex: '1 1 320px', minWidth: '0' }}>
              <section
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '20px',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '17px',
                    fontWeight: '600',
                  }}
                >
                  À la création
                </h2>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Icon name="check" size={16} />
                  <span>Un mot de passe temporaire est généré : transmettez-le par le canal convenu.</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Icon name="check" size={16} />
                  <span>L'utilisateur doit le changer à sa première connexion.</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Icon name="check" size={16} />
                  <span>La création est tracée dans le journal d'audit.</span>
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    gap: '12px',
                    paddingTop: '4px',
                  }}
                >
                  <Link
                    to="/central/utilisateurs"
                    style={{
                      boxSizing: 'border-box',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      minHeight: '40px',
                      padding: '0 16px',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-accent-text)',
                      border: '1px solid transparent',
                    }}
                  >
                    Annuler
                  </Link>
                  <Link
                    to="/central/utilisateurs"
                    style={{
                      boxSizing: 'border-box',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      minHeight: '40px',
                      padding: '0 16px',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      background: 'var(--color-accent)',
                      color: 'var(--color-primary)',
                      border: '1px solid var(--color-accent)',
                      boxShadow: 'var(--shadow-accent)',
                    }}
                  >
                    <Icon name="check" size={16} />
                    Créer le compte
                  </Link>
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
