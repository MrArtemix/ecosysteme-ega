import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Central, Préparation d'une sortie — maquette « Central-Preparation.dc.html ». */
export default function CentralPreparation() {
  useDocumentTitle("EGA Central, Préparation d'une sortie");
  const v = useScreenState({ dlg: false, notif: false }, (s, set) => {
    const r = {} as Record<string, any>;
    r.dlg = !!s.dlg;
    r.dlgNot = !s.dlg;
    r.dlgOn = () => set({ dlg: true });
    r.dlgOff = () => set({ dlg: false });
    return r;
  });
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
      <CentralSidebar active="/central/mouvements" role="magasinier" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Sorties" title="Préparation d'une sortie" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '17px', fontWeight: '500' }}>BS-2026-0042</span>
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
              Validé
            </span>
            <span style={{ color: 'var(--color-text-muted)' }}>
              Dépôt Principal EGA vers Chantier Marcory, demandé par agent1.test le 14/11/2026 à 09:12
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '520px' }}>
            <label htmlFor="p-scan" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Scanner un article ou un numéro de série
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: '48px',
                boxSizing: 'border-box',
                padding: '0 12px 0 6px',
                background: 'var(--color-surface)',
                border: '2px solid var(--color-accent)',
                borderRadius: '10px',
                color: 'var(--color-text-muted)',
                boxShadow: '0 0 0 4px rgba(245,124,0,0.14)',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-accent-soft)',
                  color: 'var(--color-primary)',
                }}
              >
                <Icon name="scan" size={16} />
              </span>
              <input
                id="p-scan"
                type="text"
                placeholder="En attente de lecture"
                style={{
                  flex: '1',
                  minWidth: '0',
                  border: '0',
                  outline: '0',
                  background: 'transparent',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  color: 'var(--color-text)',
                }}
              />
            </div>
          </div>
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
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                      background: 'var(--color-background)',
                      borderBottom: '1px solid var(--color-border)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Scanné
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
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-002</span>
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
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
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
                      <div
                        aria-hidden="true"
                        style={{
                          flex: '1',
                          height: '8px',
                          borderRadius: '6px',
                          background: 'var(--color-neutral-bg)',
                          overflow: 'hidden',
                        }}
                      >
                        <div style={{ width: '100%', height: '8px', background: 'var(--color-success)' }}></div>
                      </div>
                      <span style={{ whiteSpace: 'nowrap', fontWeight: '600' }}>40 / 40 pce</span>
                    </div>
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
                      <Icon name="check" size={14} />
                      Complet
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-001</span>
                  </td>
                  <td style={{ height: '52px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    Câble R2V 3G2.5
                    <br />
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>2 rouleaux et 50 m</span>
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
                    250 m
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
                      <div
                        aria-hidden="true"
                        style={{
                          flex: '1',
                          height: '8px',
                          borderRadius: '6px',
                          background: 'var(--color-neutral-bg)',
                          overflow: 'hidden',
                        }}
                      >
                        <div style={{ width: '80%', height: '8px', background: 'var(--color-warning)' }}></div>
                      </div>
                      <span style={{ whiteSpace: 'nowrap', fontWeight: '600' }}>200 / 250 m</span>
                    </div>
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px 3px 8px',
                        borderRadius: '16px',
                        background: 'var(--color-warning-bg)',
                        color: 'var(--color-warning-text)',
                        fontSize: '13px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="clock" size={14} />
                      En cours
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-003</span>
                  </td>
                  <td style={{ height: '52px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    Onduleur 5 kVA
                    <br />
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>
                      Série scannée : SN-OND-001
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
                    2 pce
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
                      <div
                        aria-hidden="true"
                        style={{
                          flex: '1',
                          height: '8px',
                          borderRadius: '6px',
                          background: 'var(--color-neutral-bg)',
                          overflow: 'hidden',
                        }}
                      >
                        <div style={{ width: '50%', height: '8px', background: 'var(--color-warning)' }}></div>
                      </div>
                      <span style={{ whiteSpace: 'nowrap', fontWeight: '600' }}>1 / 2 pce</span>
                    </div>
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px 3px 8px',
                        borderRadius: '16px',
                        background: 'var(--color-warning-bg)',
                        color: 'var(--color-warning-text)',
                        fontSize: '13px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="clock" size={14} />1 série manquante
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              gap: '16px',
              padding: '16px',
              background: 'var(--color-surface)',
              borderRadius: '10px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-warning-text)' }}>
                <Icon name="alert" size={18} />
                <span>
                  Sortie partielle : 2 lignes sous la quantité demandée. Un motif est obligatoire et la direction sera
                  alertée.
                </span>
              </div>
              <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  htmlFor="p-motif"
                  style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                >
                  Motif de l'écart
                </label>
                <select
                  id="p-motif"
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
                  <option>Choisir un motif</option>
                </select>
              </div>
            </div>
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
              onClick={v.dlgOn}
            >
              <Icon name="truck" size={16} />
              Valider l'expédition
            </button>
          </div>
        </main>
      </div>
      {v.dlg && (
        <>
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              right: '0',
              bottom: '0',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '180px 24px 0',
              background: 'rgba(15,41,66,0.55)',
            }}
          >
            <div
              role="dialog"
              aria-label="Expédier BS-2026-0042 ?"
              style={{
                width: '100%',
                maxWidth: '480px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                padding: '28px',
                background: 'var(--color-surface)',
                borderRadius: '16px',
                boxShadow: '0 24px 64px rgba(15,41,66,0.35)',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--color-primary)',
                }}
              >
                Expédier BS-2026-0042 ?
              </h2>
              <p style={{ margin: '0' }}>
                Sortie partielle : 200 m de câble sur 250 m et 1 onduleur sur 2. La gaine est complète.
              </p>
              <p style={{ margin: '0', color: 'var(--color-text-muted)' }}>
                Le stock est déduit, le bon passe En transit et la direction est alertée de l'écart. Choisissez un motif
                d'écart avant de confirmer.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                  gap: '12px',
                  paddingTop: '6px',
                }}
              >
                <button
                  type="button"
                  style={{
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
                    background: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-text-muted)',
                  }}
                  onClick={v.dlgOff}
                >
                  Revenir à la préparation
                </button>
                <Link
                  to="/central/mouvement"
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
                  <Icon name="truck" size={16} />
                  Confirmer l'expédition
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
