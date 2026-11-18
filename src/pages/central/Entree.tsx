import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Central, Nouvelle entrée — maquette « Central-Entree.dc.html ». */
export default function CentralEntree() {
  useDocumentTitle('EGA Central, Nouvelle entrée');
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
      <CentralSidebar active="/central/entree" role="magasinier" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Entrées" title="Nouvelle entrée" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
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
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '12px' }}>
              <div style={{ flex: '1 1 200px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  htmlFor="e-fou"
                  style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                >
                  Fournisseur ou conteneur
                </label>
                <select
                  id="e-fou"
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
                  <option>Fournisseur Test</option>
                </select>
              </div>
              <div style={{ flex: '1 1 200px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  htmlFor="e-dep"
                  style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                >
                  Dépôt de destination
                </label>
                <select
                  id="e-dep"
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
              <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Bordereau fournisseur
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minHeight: '36px' }}>
                  <Icon name="document" size={18} />
                  <span>bordereau-fournisseur.jpg</span>
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
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-accent-text)',
                      border: '1px solid transparent',
                    }}
                  >
                    Remplacer
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div style={{ flex: '1 1 320px', maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="e-scan" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Article ou numéro de série
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
                id="e-scan"
                type="text"
                placeholder="Scanner à la douchette ou saisir un SKU"
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
            <table style={{ width: '100%', minWidth: '860px', borderCollapse: 'collapse' }}>
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
                    Quantité
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
                    Conditionnement
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
                    Numéros de série
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-001</span>
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
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <label
                        htmlFor="e1"
                        style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}
                      >
                        Quantité
                      </label>
                      <input
                        id="e1"
                        type="text"
                        inputMode="decimal"
                        defaultValue="200"
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
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    2 rouleaux
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Sans numéro de série</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-003</span>
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    Onduleur 5 kVA
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
                        htmlFor="e2"
                        style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}
                      >
                        Quantité
                      </label>
                      <input
                        id="e2"
                        type="text"
                        inputMode="decimal"
                        defaultValue="2"
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
                      <span style={{ fontWeight: '600' }}>pce</span>
                    </div>
                  </td>
                  <td
                    style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                  ></td>
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
                      <Icon name="check" size={14} />2 séries sur 2
                    </span>{' '}
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>SN-OND-007, SN-OND-008</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-004</span>
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    Climatiseur Split 2 CV
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
                        htmlFor="e3"
                        style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}
                      >
                        Quantité
                      </label>
                      <input
                        id="e3"
                        type="text"
                        inputMode="decimal"
                        defaultValue="2"
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
                      <span style={{ fontWeight: '600' }}>pce</span>
                    </div>
                  </td>
                  <td
                    style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                  ></td>
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
                      <Icon name="alert" size={14} />1 série manquante
                    </span>{' '}
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>SN-CLI-009</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              padding: '16px',
              background: 'var(--color-surface)',
              borderRadius: '10px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                flex: '1 1 280px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-warning-text)',
              }}
            >
              <Icon name="alert" size={18} />
              <span>3 lignes. Il manque 1 numéro de série pour confirmer l'entrée.</span>
            </div>
            <Link
              to="/central/tableau-de-bord"
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
                background: 'transparent',
                color: 'var(--color-accent-text)',
                border: '1px solid transparent',
              }}
            >
              Annuler
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
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-text-muted)',
              }}
            >
              Enregistrer le brouillon
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
                background: 'var(--color-accent)',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-accent)',
                boxShadow: 'var(--shadow-accent)',
              }}
              onClick={v.dlgOn}
            >
              <Icon name="check" size={16} />
              Confirmer l'entrée
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
              aria-label="Entrée incomplète"
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
                Entrée incomplète
              </h2>
              <p style={{ margin: '0' }}>
                Il manque 1 numéro de série pour le Climatiseur Split 2 CV : 2 unités saisies, 1 série scannée.
              </p>
              <p style={{ margin: '0', color: 'var(--color-text-muted)' }}>
                Scannez le numéro manquant, puis confirmez l'entrée. Le brouillon est conservé.
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
                    background: 'var(--color-accent)',
                    color: 'var(--color-primary)',
                    border: '1px solid var(--color-accent)',
                    boxShadow: 'var(--shadow-accent)',
                  }}
                  onClick={v.dlgOff}
                >
                  <Icon name="scan" size={16} />
                  Compléter les séries
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
