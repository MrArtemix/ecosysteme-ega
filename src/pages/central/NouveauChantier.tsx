import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Central, Nouveau chantier — maquette « Central-NouveauChantier.dc.html ». */
export default function CentralNouveauChantier() {
  useDocumentTitle('EGA Central, Nouveau chantier');
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
      <CentralSidebar active="/central/sites" role="admin" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Sites" title="Nouveau chantier" />
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
                  Type de site
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <label
                    htmlFor="nc-t1"
                    style={{
                      flex: '1 1 130px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      minHeight: '48px',
                      padding: '0 12px',
                      border: '2px solid var(--color-accent)',
                      borderRadius: '10px',
                      background: 'rgba(245,124,0,0.08)',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      id="nc-t1"
                      type="radio"
                      name="nc-type"
                      defaultChecked
                      style={{ width: '16px', height: '16px' }}
                    />
                    <Icon name="mapPin" size={18} />
                    <span style={{ fontWeight: '600' }}>Chantier</span>
                  </label>
                  <label
                    htmlFor="nc-t2"
                    style={{
                      flex: '1 1 130px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      minHeight: '48px',
                      padding: '0 12px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      background: 'var(--color-surface)',
                      cursor: 'pointer',
                    }}
                  >
                    <input id="nc-t2" type="radio" name="nc-type" style={{ width: '16px', height: '16px' }} />
                    <Icon name="box" size={18} />
                    <span style={{ fontWeight: '600' }}>Dépôt</span>
                  </label>
                  <label
                    htmlFor="nc-t3"
                    style={{
                      flex: '1 1 130px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      minHeight: '48px',
                      padding: '0 12px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      background: 'var(--color-surface)',
                      cursor: 'pointer',
                    }}
                  >
                    <input id="nc-t3" type="radio" name="nc-type" style={{ width: '16px', height: '16px' }} />
                    <Icon name="arrowDown" size={18} />
                    <span style={{ fontWeight: '600' }}>Fournisseur</span>
                  </label>
                  <label
                    htmlFor="nc-t4"
                    style={{
                      flex: '1 1 130px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      minHeight: '48px',
                      padding: '0 12px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '10px',
                      background: 'var(--color-surface)',
                      cursor: 'pointer',
                    }}
                  >
                    <input id="nc-t4" type="radio" name="nc-type" style={{ width: '16px', height: '16px' }} />
                    <Icon name="user" size={18} />
                    <span style={{ fontWeight: '600' }}>Client</span>
                  </label>
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
                  Identification
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <div
                    style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}
                  >
                    <label
                      htmlFor="nc-nom"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Nom du chantier (obligatoire)
                    </label>
                    <input
                      id="nc-nom"
                      type="text"
                      defaultValue="Chantier Plateau"
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
                      htmlFor="nc-code"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Code
                    </label>
                    <input
                      id="nc-code"
                      type="text"
                      defaultValue="CH-03, attribué automatiquement"
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
                    htmlFor="nc-adr"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Adresse
                  </label>
                  <input
                    id="nc-adr"
                    type="text"
                    placeholder="Rue, quartier, commune"
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
                  Contact sur le chantier
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <div
                    style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}
                  >
                    <label
                      htmlFor="nc-ct"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Nom du contact
                    </label>
                    <input
                      id="nc-ct"
                      type="text"
                      placeholder="Nom et prénom du chef de chantier"
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
                      htmlFor="nc-tel"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Téléphone du contact
                    </label>
                    <input
                      id="nc-tel"
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
                  Agents affectés au chantier
                </h2>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Seuls les agents affectés voient les bons de ce chantier dans EGA Terrain et peuvent confirmer les
                  réceptions.
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="nc-a1"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      minHeight: '44px',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      background: 'var(--color-neutral-bg)',
                      cursor: 'pointer',
                    }}
                  >
                    <input id="nc-a1" type="checkbox" defaultChecked style={{ width: '16px', height: '16px' }} />
                    <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.3' }}>
                      <span style={{ fontWeight: '500' }}>agent1.test</span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                        Agent terrain, déjà affecté au Chantier Marcory
                      </span>
                    </span>
                  </label>
                  <label
                    htmlFor="nc-a2"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      minHeight: '44px',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      background: 'var(--color-neutral-bg)',
                      cursor: 'pointer',
                    }}
                  >
                    <input id="nc-a2" type="checkbox" defaultChecked style={{ width: '16px', height: '16px' }} />
                    <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.3' }}>
                      <span style={{ fontWeight: '500' }}>chauffeur1.test</span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Chauffeur</span>
                    </span>
                  </label>
                </div>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      flex: 'none',
                      borderRadius: '10px',
                      background: 'var(--color-accent-soft)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon name="mapPin" />
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.3' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-0.01em',
                        fontSize: '17px',
                        fontWeight: '700',
                      }}
                    >
                      Chantier Plateau
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      Nouveau chantier, pas encore enregistré
                    </span>
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Code</span>
                  <span style={{ textAlign: 'right', fontWeight: '500' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>CH-03</span>
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Type</span>
                  <span style={{ textAlign: 'right', fontWeight: '500' }}>Chantier</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Agents affectés</span>
                  <span style={{ textAlign: 'right', fontWeight: '500' }}>2</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>État à la création</span>
                  <span style={{ textAlign: 'right', fontWeight: '500' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px 3px 8px',
                        borderRadius: '16px',
                        background: 'var(--color-success-bg)',
                        color: 'var(--color-success-text)',
                        fontSize: '13px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="check" size={14} />
                      Actif
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'var(--color-neutral-bg)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <Icon name="check" size={16} />
                    <span>Disponible tout de suite comme destination d'une sortie dans EGA Central.</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <Icon name="check" size={16} />
                    <span>Visible dans EGA Terrain à la prochaine synchronisation des agents.</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <Icon name="check" size={16} />
                    <span>Un chantier ne se supprime pas : il se désactive, et son historique est conservé.</span>
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '12px' }}>
                  <Link
                    to="/central/sites"
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
                    to="/central/sites"
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
                    Créer le chantier
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
