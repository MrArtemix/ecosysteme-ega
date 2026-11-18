import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Central, Journal d'audit — maquette « Central-Audit.dc.html ». */
export default function CentralAudit() {
  useDocumentTitle("EGA Central, Journal d'audit");
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
      <CentralSidebar active="/central/audit" role="admin" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Audit" title="Journal d'audit" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '12px' }}>
            <div style={{ flex: '1 1 170px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="a-u" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Utilisateur
              </label>
              <select
                id="a-u"
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
                <option>Tous les utilisateurs</option>
              </select>
            </div>
            <div style={{ flex: '1 1 170px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="a-t" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Objet
              </label>
              <select
                id="a-t"
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
                <option>Tous les objets</option>
              </select>
            </div>
            <div style={{ flex: '1 1 170px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="a-a" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Action
              </label>
              <select
                id="a-a"
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
                <option>Toutes les actions</option>
              </select>
            </div>
            <div style={{ flex: '1 1 170px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="a-p" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Période
              </label>
              <select
                id="a-p"
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
                <option>7 derniers jours</option>
              </select>
            </div>
            <div style={{ flex: '1 1 0' }}></div>
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
                background: 'var(--color-accent)',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-accent)',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              <Icon name="download" size={16} />
              Exporter
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              borderRadius: '10px',
              background: 'var(--color-neutral-bg)',
            }}
          >
            <Icon name="info" size={18} />
            <span>Journal en lecture seule. Aucune ligne ne peut être modifiée ni supprimée.</span>
          </div>
          <div
            style={{
              overflowX: 'auto',
              background: 'var(--color-surface)',
              borderRadius: '10px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <table style={{ width: '100%', minWidth: '1040px', borderCollapse: 'collapse' }}>
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
                    Date et heure
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
                    Utilisateur
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
                    Objet
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
                    Action
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
                    Ancien état
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
                    Nouvel état
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    14/11/2026 11:20
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    agent1.test
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    stock_movements
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px 3px 8px',
                        borderRadius: '16px',
                        background: 'var(--color-neutral-bg)',
                        color: 'var(--color-text-muted)',
                        fontSize: '13px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="pencil" size={14} />
                      Modification
                    </span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    statut : En transit
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    statut : Terminé avec écart
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    14/11/2026 10:05
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    mag1.test
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    stock_balances
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px 3px 8px',
                        borderRadius: '16px',
                        background: 'var(--color-neutral-bg)',
                        color: 'var(--color-text-muted)',
                        fontSize: '13px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="pencil" size={14} />
                      Modification
                    </span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    PRD-002 : 400 en stock, 40 réservés
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    PRD-002 : 360 en stock, 0 réservé
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    14/11/2026 10:05
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    mag1.test
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    stock_movements
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px 3px 8px',
                        borderRadius: '16px',
                        background: 'var(--color-neutral-bg)',
                        color: 'var(--color-text-muted)',
                        fontSize: '13px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="pencil" size={14} />
                      Modification
                    </span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    statut : Validé
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    statut : En transit
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    14/11/2026 09:02
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    mag1.test
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    stock_movements
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
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
                      <Icon name="plus" size={14} />
                      Création
                    </span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  ></td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    BE-2026-0118, Terminé
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    13/11/2026 16:30
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    admin.test
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    products
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px 3px 8px',
                        borderRadius: '16px',
                        background: 'var(--color-neutral-bg)',
                        color: 'var(--color-text-muted)',
                        fontSize: '13px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="pencil" size={14} />
                      Modification
                    </span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    PRD-003 : coût 800 000
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    PRD-003 : coût 825 000
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    13/11/2026 15:52
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    admin.test
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    stock_movements
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px 3px 8px',
                        borderRadius: '16px',
                        background: 'var(--color-neutral-bg)',
                        color: 'var(--color-text-muted)',
                        fontSize: '13px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="pencil" size={14} />
                      Modification
                    </span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    statut : Validé
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    statut : Annulé
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>6 lignes, 25 lignes par page</span>
        </main>
      </div>
    </div>
  );
}
