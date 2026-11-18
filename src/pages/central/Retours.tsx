import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Central, Retours — maquette « Central-Retours.dc.html ». */
export default function CentralRetours() {
  useDocumentTitle('EGA Central, Retours');
  const v = useScreenState({ dlg: false, toast: false, notif: false }, (s, set) => {
    const r = {} as Record<string, any>;
    r.dlg = !!s.dlg;
    r.dlgNot = !s.dlg;
    r.dlgOn = () => set({ dlg: true });
    r.dlgOff = () => set({ dlg: false });
    r.toast = !!s.toast;
    r.toastNot = !s.toast;
    r.toastOn = () => set({ toast: true });
    r.toastOff = () => set({ toast: false });
    r.okRet = () => set({ dlg: false, toast: true });
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
      <CentralSidebar active="/central/retours" role="magasinier" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Retours" title="Retours" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <div
              style={{
                flex: '1 1 220px',
                minWidth: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 18px',
                background: 'var(--color-surface)',
                borderRadius: '10px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
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
                  background: 'var(--color-warning-bg)',
                  color: 'var(--color-warning-text)',
                }}
              >
                <Icon name="refresh" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Retours à valider
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '1.15',
                    whiteSpace: 'nowrap',
                  }}
                >
                  1
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>annoncé par le terrain</span>
              </span>
            </div>
            <div
              style={{
                flex: '1 1 220px',
                minWidth: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 18px',
                background: 'var(--color-surface)',
                borderRadius: '10px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
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
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                }}
              >
                <Icon name="check" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Validés ce mois
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '1.15',
                    whiteSpace: 'nowrap',
                  }}
                >
                  0
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>aucun pour l'instant</span>
              </span>
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
            <table style={{ width: '100%', minWidth: '900px', borderCollapse: 'collapse' }}>
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
                    Chantier
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
                    Déclaré
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
                    Constaté au dépôt
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
                    Annoncé par
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
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
                    Chantier Marcory
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    Câble R2V 3G2.5
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
                    35 m
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
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <label
                        htmlFor="rt-c"
                        style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}
                      >
                        Quantité
                      </label>
                      <input
                        id="rt-c"
                        type="text"
                        inputMode="decimal"
                        defaultValue="35"
                        style={{
                          boxSizing: 'border-box',
                          width: '88px',
                          height: '28px',
                          padding: '0 8px',
                          textAlign: 'right',
                          border: '1px solid var(--color-border)',
                          borderRadius: '6px',
                          fontFamily: 'inherit',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'var(--color-text)',
                          background: 'var(--color-surface)',
                        }}
                      />
                      <span style={{ fontWeight: '600' }}>m</span>
                    </div>
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    agent1.test, 09:55
                  </td>
                  <td
                    style={{
                      height: '52px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      textAlign: 'right',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        minHeight: '32px',
                        padding: '0 16px',
                        borderRadius: '10px',
                        fontFamily: 'inherit',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        background: 'var(--color-accent)',
                        color: 'var(--color-primary)',
                        border: '1px solid var(--color-accent)',
                        boxShadow: 'var(--shadow-accent)',
                      }}
                      onClick={v.dlgOn}
                    >
                      <Icon name="check" size={16} />
                      Valider le retour
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
            <span>
              Si la quantité constatée diffère de la quantité déclarée, un motif est demandé et la direction est
              alertée.
            </span>
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
              aria-label="Valider ce retour ?"
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
                Valider ce retour ?
              </h2>
              <p style={{ margin: '0' }}>35 m de Câble R2V 3G2.5 sont réintégrés au Dépôt Principal EGA.</p>
              <p style={{ margin: '0', color: 'var(--color-text-muted)' }}>
                La valorisation du Chantier Marcory diminue d'autant. L'agent est prévenu.
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
                  Annuler
                </button>
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
                    background: 'var(--color-accent)',
                    color: 'var(--color-primary)',
                    border: '1px solid var(--color-accent)',
                    boxShadow: 'var(--shadow-accent)',
                  }}
                  onClick={v.okRet}
                >
                  <Icon name="check" size={16} />
                  Valider le retour
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {v.toast && (
        <>
          <div
            role="status"
            style={{
              position: 'absolute',
              top: '84px',
              right: '28px',
              width: '400px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 12px 12px 14px',
              borderRadius: '10px',
              background: 'var(--color-primary)',
              color: 'var(--color-on-primary)',
              boxShadow: '0 12px 32px rgba(15,41,66,0.35)',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                flex: 'none',
                borderRadius: '50%',
                background: 'var(--color-success)',
                color: 'var(--color-on-primary)',
              }}
            >
              <Icon name="check" size={16} />
            </span>
            <span style={{ flex: '1', fontSize: '14px' }}>Retour validé : 35 m réintégrés au Dépôt Principal EGA.</span>
            <button
              type="button"
              aria-label="Fermer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                flex: 'none',
                border: '0',
                borderRadius: '10px',
                background: 'transparent',
                color: 'var(--color-on-primary)',
                cursor: 'pointer',
              }}
              onClick={v.toastOff}
            >
              <Icon name="close" size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
