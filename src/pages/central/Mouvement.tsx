import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Central, Détail d'un mouvement — maquette « Central-Mouvement.dc.html ». */
export default function CentralMouvement() {
  useDocumentTitle("EGA Central, Détail d'un mouvement");
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
      <CentralSidebar active="/central/mouvements" role="admin" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Sorties" title="Détail d'un mouvement" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ flex: '999 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '17px', fontWeight: '500' }}>
                  BS-2026-0042
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '3px 10px 3px 8px',
                    borderRadius: '16px',
                    background: 'var(--color-danger-bg)',
                    color: 'var(--color-danger-text)',
                    fontSize: '13px',
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Icon name="alert" size={14} />
                  Terminé avec écart
                </span>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Sortie, Dépôt Principal EGA vers Chantier Marcory
                </span>
                <div style={{ flex: '1 1 0' }}></div>
                <Link
                  to="/central/bon"
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
                    background: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-text-muted)',
                  }}
                >
                  <Icon name="printer" size={16} />
                  Imprimer le bon (Ctrl+P)
                </Link>
              </div>
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
                    <span
                      style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}
                    >
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
                    <span
                      style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}
                    >
                      Validé
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
                    <span
                      style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}
                    >
                      En transit
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
                      <span style={{ flex: '1', height: '2px', background: 'transparent' }}></span>
                    </span>
                    <span
                      style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}
                    >
                      Reçu
                    </span>
                  </li>
                </ol>
              </section>
              <div
                style={{
                  overflowX: 'auto',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <table style={{ width: '100%', minWidth: '820px', borderCollapse: 'collapse' }}>
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
                        SKU
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
                        Produit
                      </th>
                      <th
                        scope="col"
                        style={{
                          height: '36px',
                          padding: '0 16px',
                          textAlign: 'right',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Demandé
                      </th>
                      <th
                        scope="col"
                        style={{
                          height: '36px',
                          padding: '0 16px',
                          textAlign: 'right',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Sorti
                      </th>
                      <th
                        scope="col"
                        style={{
                          height: '36px',
                          padding: '0 16px',
                          textAlign: 'right',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Reçu
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
                        Écart
                      </th>
                      <th
                        scope="col"
                        style={{
                          height: '36px',
                          padding: '0 16px',
                          textAlign: 'right',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Valeur
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          PRD-002
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Gaine ICTA Ø20
                      </td>
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        40 pce
                      </td>
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        40 pce
                      </td>
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                          fontWeight: '600',
                        }}
                      >
                        36 pce
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
                            background: 'var(--color-danger-bg)',
                            color: 'var(--color-danger-text)',
                            fontSize: '13px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Icon name="alert" size={14} />4 pce, Manquant
                        </span>
                      </td>
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        120 000 FCFA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                  Preuves de livraison
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <div
                    role="img"
                    aria-label="Photo du déchargement"
                    style={{
                      flex: '1 1 220px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      height: '140px',
                      borderRadius: '6px',
                      background: 'var(--color-neutral-bg)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    <Icon name="camera" size={28} />
                    <span>Photo du déchargement</span>
                  </div>
                  <div
                    style={{
                      flex: '1 1 220px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      height: '140px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '6px',
                    }}
                  >
                    <svg
                      width="200"
                      height="56"
                      viewBox="0 0 200 56"
                      fill="none"
                      stroke="#111827"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      role="img"
                      aria-label="Signature tracée"
                    >
                      <path d="M8 40c14-28 22-30 26-12s10 20 20 2 14-22 20-6 12 18 24 4 22-20 34-10 24 8 40-6 14-8 20-2" />
                    </svg>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      Signature du chef de chantier
                    </span>
                  </div>
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
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '17px',
                    fontWeight: '600',
                  }}
                >
                  Historique des statuts
                </h2>
                <ol style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span
                      aria-hidden="true"
                      style={{ display: 'inline-flex', marginTop: '2px', color: 'var(--color-success)' }}
                    >
                      <Icon name="checkCircle" size={18} />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingBottom: '12px' }}>
                      <span style={{ fontWeight: '600' }}>Demande créée</span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                        agent1.test, 14/11/2026 09:12
                      </span>
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span
                      aria-hidden="true"
                      style={{ display: 'inline-flex', marginTop: '2px', color: 'var(--color-success)' }}
                    >
                      <Icon name="checkCircle" size={18} />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingBottom: '12px' }}>
                      <span style={{ fontWeight: '600' }}>Validé</span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                        validation automatique, 09:12
                      </span>
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span
                      aria-hidden="true"
                      style={{ display: 'inline-flex', marginTop: '2px', color: 'var(--color-success)' }}
                    >
                      <Icon name="checkCircle" size={18} />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingBottom: '12px' }}>
                      <span style={{ fontWeight: '600' }}>En transit</span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>mag1.test, 10:05</span>
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span
                      aria-hidden="true"
                      style={{ display: 'inline-flex', marginTop: '2px', color: 'var(--color-success)' }}
                    >
                      <Icon name="checkCircle" size={18} />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingBottom: '0px' }}>
                      <span style={{ fontWeight: '600' }}>Terminé avec écart</span>
                      <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>agent1.test, 11:20</span>
                    </span>
                  </li>
                </ol>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
