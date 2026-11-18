import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Central, Transferts — maquette « Central-Transferts.dc.html ». */
export default function CentralTransferts() {
  useDocumentTitle('EGA Central, Transferts');
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
    r.okTf = () => set({ dlg: false, toast: true });
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
      <CentralSidebar active="/central/transferts" role="magasinier" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Transferts" title="Transferts" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              padding: '64px 24px',
              textAlign: 'center',
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
                width: '56px',
                height: '56px',
                flex: 'none',
                borderRadius: '10px',
                background: 'var(--color-neutral-bg)',
                color: 'var(--color-text-muted)',
              }}
            >
              <Icon name="transfer" />
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '20px',
                fontWeight: '700',
                color: 'var(--color-primary)',
              }}
            >
              Aucun transfert en cours
            </span>
            <span style={{ maxWidth: '460px', color: 'var(--color-text-muted)' }}>
              Un transfert déplace du stock entre deux dépôts : il sort du dépôt source à l'expédition et entre au dépôt
              de destination à la réception.
            </span>
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
              onClick={v.dlgOn}
            >
              <Icon name="plus" size={16} />
              Nouveau transfert
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
              aria-label="Nouveau transfert"
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
                Nouveau transfert
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ flex: '1 1 180px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="tf-s"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Dépôt source
                  </label>
                  <select
                    id="tf-s"
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
                    <option>Dépôt Principal EGA</option>
                  </select>
                </div>
                <div style={{ flex: '1 1 180px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="tf-d"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Dépôt de destination
                  </label>
                  <select
                    id="tf-d"
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
                    <option>Dépôt Secondaire</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ flex: '1 1 220px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="tf-a"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Article
                  </label>
                  <select
                    id="tf-a"
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
                    <option>Gaine ICTA Ø20</option>
                  </select>
                </div>
                <div style={{ flex: '1 1 120px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="tf-q"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Quantité (pce)
                  </label>
                  <input
                    id="tf-q"
                    type="text"
                    defaultValue="50"
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
                  onClick={v.okTf}
                >
                  <Icon name="check" size={16} />
                  Créer le transfert
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
            <span style={{ flex: '1', fontSize: '14px' }}>
              Transfert créé : 50 pce de gaine vers le Dépôt Secondaire, à préparer.
            </span>
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
