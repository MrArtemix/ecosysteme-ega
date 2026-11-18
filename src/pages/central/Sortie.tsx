import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Central, Nouvelle sortie — maquette « Central-Sortie.dc.html ». */
export default function CentralSortie() {
  useDocumentTitle('EGA Central, Nouvelle sortie');
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
        <CentralTopbar breadcrumb="Sorties" title="Nouvelle sortie" />
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ flex: '1 1 200px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  htmlFor="s-depot"
                  style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                >
                  Dépôt source
                </label>
                <select
                  id="s-depot"
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
              <div style={{ flex: '1 1 200px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="s-ch" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Chantier destinataire
                </label>
                <select
                  id="s-ch"
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
                  <option>Chantier Marcory</option>
                </select>
              </div>
              <div style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  htmlFor="s-note"
                  style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                >
                  Remarque
                </label>
                <input
                  id="s-note"
                  type="text"
                  placeholder="Facultatif"
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
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '12px' }}>
            <div style={{ flex: '1 1 320px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="s-scan" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Article
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
                  id="s-scan"
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
            <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>3 lignes</span>
          </div>
          <div
            style={{
              overflowX: 'auto',
              background: 'var(--color-surface)',
              borderRadius: '10px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <table style={{ width: '100%', minWidth: '760px', borderCollapse: 'collapse' }}>
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
                    Disponible
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
                    400 pce
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
                        htmlFor="q1"
                        style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}
                      >
                        Quantité
                      </label>
                      <input
                        id="q1"
                        type="text"
                        inputMode="decimal"
                        defaultValue="40"
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
                      textAlign: 'right',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <button
                      type="button"
                      aria-label="Retirer la ligne"
                      style={{
                        display: 'inline-flex',
                        background: 'transparent',
                        border: '0',
                        padding: '4px',
                        color: 'var(--color-text-muted)',
                        cursor: 'pointer',
                      }}
                    >
                      <Icon name="close" size={16} />
                    </button>
                  </td>
                </tr>
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
                    1 200 m
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
                        htmlFor="q2"
                        style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}
                      >
                        Quantité
                      </label>
                      <input
                        id="q2"
                        type="text"
                        inputMode="decimal"
                        defaultValue="250"
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
                    soit 2 rouleaux et 50 m
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
                    <button
                      type="button"
                      aria-label="Retirer la ligne"
                      style={{
                        display: 'inline-flex',
                        background: 'transparent',
                        border: '0',
                        padding: '4px',
                        color: 'var(--color-text-muted)',
                        cursor: 'pointer',
                      }}
                    >
                      <Icon name="close" size={16} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-005</span>
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    Disjoncteur 20 A
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
                    18 pce
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
                        htmlFor="q3"
                        style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}
                      >
                        Quantité
                      </label>
                      <input
                        id="q3"
                        type="text"
                        inputMode="decimal"
                        defaultValue="10"
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
                      textAlign: 'right',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <button
                      type="button"
                      aria-label="Retirer la ligne"
                      style={{
                        display: 'inline-flex',
                        background: 'transparent',
                        border: '0',
                        padding: '4px',
                        color: 'var(--color-text-muted)',
                        cursor: 'pointer',
                      }}
                    >
                      <Icon name="close" size={16} />
                    </button>
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
            <div style={{ flex: '1 1 280px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Statut prévu
              </span>
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
                Validation automatique : les quantités sont réservées dès la soumission.
              </span>
            </div>
            <Link
              to="/central/mouvements"
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
              Soumettre (Ctrl+Entrée)
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
              aria-label="Soumettre cette sortie ?"
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
                Soumettre cette sortie ?
              </h2>
              <p style={{ margin: '0' }}>
                3 lignes du Dépôt Principal EGA vers le Chantier Marcory : 40 pce de gaine, 250 m de câble et 10
                disjoncteurs.
              </p>
              <p style={{ margin: '0', color: 'var(--color-text-muted)' }}>
                La sortie est validée automatiquement et les quantités sont réservées.
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
                  Revenir à la saisie
                </button>
                <Link
                  to="/central/preparation"
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
                  Soumettre
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
