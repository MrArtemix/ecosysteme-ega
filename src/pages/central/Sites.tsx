import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Central, Sites — maquette « Central-Sites.dc.html ». */
export default function CentralSites() {
  useDocumentTitle('EGA Central, Sites');
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
        <CentralTopbar breadcrumb="Sites" title="Sites" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ flex: '999 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '12px' }}>
                <div role="group" aria-label="Type de site" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <button
                    type="button"
                    aria-pressed="true"
                    style={{
                      minHeight: '36px',
                      padding: '0 12px',
                      borderRadius: '6px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      background: 'var(--color-primary)',
                      color: 'var(--color-on-primary)',
                      border: '1px solid var(--color-primary)',
                    }}
                  >
                    Tous
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      minHeight: '36px',
                      padding: '0 12px',
                      borderRadius: '6px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      border: '1px solid var(--color-text-muted)',
                    }}
                  >
                    Dépôts
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      minHeight: '36px',
                      padding: '0 12px',
                      borderRadius: '6px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      border: '1px solid var(--color-text-muted)',
                    }}
                  >
                    Chantiers
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      minHeight: '36px',
                      padding: '0 12px',
                      borderRadius: '6px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      border: '1px solid var(--color-text-muted)',
                    }}
                  >
                    Fournisseurs
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      minHeight: '36px',
                      padding: '0 12px',
                      borderRadius: '6px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      border: '1px solid var(--color-text-muted)',
                    }}
                  >
                    Clients
                  </button>
                </div>
                <div style={{ flex: '1 1 0' }}></div>
                <Link
                  to="/central/nouveau-chantier"
                  style={{
                    boxSizing: 'border-box',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    minHeight: '36px',
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
                  <Icon name="plus" size={16} />
                  Nouveau site
                </Link>
              </div>
              <div
                style={{
                  overflowX: 'auto',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <table style={{ width: '100%', minWidth: '520px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{
                          height: '36px',
                          padding: '0 16px',
                          textAlign: 'left',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Code
                      </th>
                      <th
                        scope="col"
                        style={{
                          height: '36px',
                          padding: '0 16px',
                          textAlign: 'left',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Nom
                      </th>
                      <th
                        scope="col"
                        style={{
                          height: '36px',
                          padding: '0 16px',
                          textAlign: 'left',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        style={{
                          height: '36px',
                          padding: '0 16px',
                          textAlign: 'left',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        État
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          DEP-01
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Dépôt Principal EGA
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Dépôt
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          DEP-02
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Dépôt Secondaire
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Dépôt
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                      </td>
                    </tr>
                    <tr style={{ background: 'var(--color-neutral-bg)' }}>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          CH-01
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Chantier Marcory
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Chantier
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          CH-02
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Chantier Riviera 4
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Chantier
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          FOU-01
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Fournisseur Test
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Fournisseur
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                  Fiche site
                </h2>
                <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="s-nom"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Nom
                  </label>
                  <input
                    id="s-nom"
                    type="text"
                    defaultValue="Chantier Marcory"
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
                <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="s-type"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Type
                  </label>
                  <select
                    id="s-type"
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
                    <option>Chantier</option>
                  </select>
                </div>
                <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="s-adr"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Adresse
                  </label>
                  <input
                    id="s-adr"
                    type="text"
                    defaultValue="[ADRESSE DU CHANTIER]"
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
                <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="s-ct"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Contact
                  </label>
                  <input
                    id="s-ct"
                    type="text"
                    defaultValue="[NOM DU CONTACT]"
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
                <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="s-tel"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Téléphone du contact
                  </label>
                  <input
                    id="s-tel"
                    type="text"
                    defaultValue="[TÉLÉPHONE]"
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
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Un site ne peut pas être désactivé tant qu'un mouvement est en cours.
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '12px' }}>
                  <button
                    type="button"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      minHeight: '36px',
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
                    Désactiver
                  </button>
                  <button
                    type="button"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      minHeight: '36px',
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
                    Enregistrer
                  </button>
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
