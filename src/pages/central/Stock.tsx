import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Central, Stock — maquette « Main.dc.html ». */
export default function CentralStock() {
  useDocumentTitle('EGA Central, Stock');
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
      <CentralSidebar active="/central/stock" role="admin" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Stock" title="Stock" />
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
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                }}
              >
                <Icon name="coin" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Valeur du dépôt
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
                  11 641 000
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>FCFA, coûts figés</span>
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
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <Icon name="box" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Références actives
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
                  5
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Dépôt Principal EGA</span>
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
                  background: 'var(--color-warning-bg)',
                  color: 'var(--color-warning-text)',
                }}
              >
                <Icon name="lock" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Produits réservés
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
                  2
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>42 unités en préparation</span>
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
                  background: 'var(--color-danger-bg)',
                  color: 'var(--color-danger-text)',
                }}
              >
                <Icon name="alert" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Sous seuil
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
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Disjoncteur 20 A</span>
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '16px' }}>
            <section
              style={{
                flex: '1 1 420px',
                minWidth: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '20px',
                background: 'var(--color-surface)',
                borderRadius: '10px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '17px',
                    fontWeight: '600',
                  }}
                >
                  Valeur du stock par catégorie
                </h2>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Dépôt Principal EGA, 11 641 000 FCFA
                </span>
              </div>
              <div
                role="img"
                aria-label="Répartition de la valeur du stock par catégorie"
                style={{ display: 'flex', gap: '3px', height: '16px', borderRadius: '6px', overflow: 'hidden' }}
              >
                <div style={{ width: '41.9%', background: 'var(--color-primary)' }}></div>
                <div style={{ width: '29.2%', background: 'var(--color-accent)' }}></div>
                <div style={{ width: '18.6%', background: '#6B7F95' }}></div>
                <div style={{ width: '10.3%', background: 'var(--color-on-primary-muted)' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: '10px',
                      height: '10px',
                      flex: 'none',
                      borderRadius: '3px',
                      background: 'var(--color-primary)',
                    }}
                  ></span>
                  <span style={{ flex: '1' }}>Énergie et solaire</span>
                  <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>4 881 000 FCFA</span>
                  <span
                    style={{
                      width: '52px',
                      textAlign: 'right',
                      color: 'var(--color-text-muted)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    41,9 %
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: '10px',
                      height: '10px',
                      flex: 'none',
                      borderRadius: '3px',
                      background: 'var(--color-accent)',
                    }}
                  ></span>
                  <span style={{ flex: '1' }}>Climatisation</span>
                  <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>3 400 000 FCFA</span>
                  <span
                    style={{
                      width: '52px',
                      textAlign: 'right',
                      color: 'var(--color-text-muted)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    29,2 %
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    aria-hidden="true"
                    style={{ width: '10px', height: '10px', flex: 'none', borderRadius: '3px', background: '#6B7F95' }}
                  ></span>
                  <span style={{ flex: '1' }}>Câbles</span>
                  <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>2 160 000 FCFA</span>
                  <span
                    style={{
                      width: '52px',
                      textAlign: 'right',
                      color: 'var(--color-text-muted)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    18,6 %
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: '10px',
                      height: '10px',
                      flex: 'none',
                      borderRadius: '3px',
                      background: 'var(--color-on-primary-muted)',
                    }}
                  ></span>
                  <span style={{ flex: '1' }}>Gaines</span>
                  <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>1 200 000 FCFA</span>
                  <span
                    style={{
                      width: '52px',
                      textAlign: 'right',
                      color: 'var(--color-text-muted)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    10,3 %
                  </span>
                </div>
              </div>
            </section>
            <section
              style={{
                flex: '1 1 420px',
                minWidth: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
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
                Aujourd'hui au dépôt
              </h2>
              <ol style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    11:20
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-danger-bg)',
                        color: 'var(--color-danger-text)',
                      }}
                    >
                      <Icon name="alert" size={16} />
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ flex: '1', width: '2px', minHeight: '10px', background: 'var(--color-divider)' }}
                    ></span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Réception avec écart</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BS-2026-0042, 36 pce reçues sur 40, agent1.test
                    </span>
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    10:10
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-success-bg)',
                        color: 'var(--color-success-text)',
                      }}
                    >
                      <Icon name="check" size={16} />
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ flex: '1', width: '2px', minHeight: '10px', background: 'var(--color-divider)' }}
                    ></span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Sortie validée</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BS-2026-0043, Chantier Riviera 4, mag1.test
                    </span>
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    10:05
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-warning-bg)',
                        color: 'var(--color-warning-text)',
                      }}
                    >
                      <Icon name="truck" size={16} />
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ flex: '1', width: '2px', minHeight: '10px', background: 'var(--color-divider)' }}
                    ></span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Expédition</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BS-2026-0042 vers Chantier Marcory, mag1.test
                    </span>
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    09:12
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-neutral-bg)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <Icon name="arrowUp" size={16} />
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ flex: '1', width: '2px', minHeight: '10px', background: 'var(--color-divider)' }}
                    ></span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Demande reçue du terrain</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BS-2026-0042, agent1.test
                    </span>
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    09:02
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-success-bg)',
                        color: 'var(--color-success-text)',
                      }}
                    >
                      <Icon name="arrowDown" size={16} />
                    </span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Entrée confirmée</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BE-2026-0118, 200 m de câble, mag1.test
                    </span>
                  </span>
                </li>
              </ol>
            </section>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '12px' }}>
            <div style={{ flex: '1 1 200px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label
                htmlFor="f-depot"
                style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
              >
                Dépôt
              </label>
              <select
                id="f-depot"
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
              <label htmlFor="f-cat" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Catégorie
              </label>
              <select
                id="f-cat"
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
                <option>Toutes les catégories</option>
              </select>
            </div>
            <div style={{ flex: '1 1 240px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="f-q" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Recherche
              </label>
              <input
                id="f-q"
                type="text"
                placeholder="SKU ou nom du produit"
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
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '36px' }}>
              <input type="checkbox" style={{ width: '16px', height: '16px' }} />
              Sous seuil seulement
            </label>
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
                    En stock
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
                    Réservé
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
                    Disponible (bleu) et réservé (ambre)
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
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-001</span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
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
                    0 m
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '170px' }}>
                      <div
                        aria-hidden="true"
                        style={{
                          flex: '1',
                          display: 'flex',
                          height: '8px',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          background: 'var(--color-neutral-bg)',
                        }}
                      >
                        <div style={{ width: '100%', background: 'var(--color-primary)' }}></div>
                        <div style={{ width: '0%', background: 'var(--color-warning)' }}></div>
                      </div>
                      <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>1 200 m</span>
                    </div>
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
                    2 160 000 FCFA
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
                      <Icon name="box" size={14} />
                      En stock
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-002</span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
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
                    40 pce
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '170px' }}>
                      <div
                        aria-hidden="true"
                        style={{
                          flex: '1',
                          display: 'flex',
                          height: '8px',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          background: 'var(--color-neutral-bg)',
                        }}
                      >
                        <div style={{ width: '90%', background: 'var(--color-primary)' }}></div>
                        <div style={{ width: '10%', background: 'var(--color-warning)' }}></div>
                      </div>
                      <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>360 pce</span>
                    </div>
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
                    1 200 000 FCFA
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
                      <Icon name="box" size={14} />
                      En stock
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-003</span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
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
                    6 pce
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '170px' }}>
                      <div
                        aria-hidden="true"
                        style={{
                          flex: '1',
                          display: 'flex',
                          height: '8px',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          background: 'var(--color-neutral-bg)',
                        }}
                      >
                        <div style={{ width: '67%', background: 'var(--color-primary)' }}></div>
                        <div style={{ width: '33%', background: 'var(--color-warning)' }}></div>
                      </div>
                      <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>4 pce</span>
                    </div>
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
                    4 800 000 FCFA
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
                      <Icon name="box" size={14} />
                      En stock
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-004</span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
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
                    8 pce
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
                    0 pce
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '170px' }}>
                      <div
                        aria-hidden="true"
                        style={{
                          flex: '1',
                          display: 'flex',
                          height: '8px',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          background: 'var(--color-neutral-bg)',
                        }}
                      >
                        <div style={{ width: '100%', background: 'var(--color-primary)' }}></div>
                        <div style={{ width: '0%', background: 'var(--color-warning)' }}></div>
                      </div>
                      <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>8 pce</span>
                    </div>
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
                    3 400 000 FCFA
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
                      <Icon name="box" size={14} />
                      En stock
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>PRD-005</span>
                  </td>
                  <td
                    style={{
                      height: '36px',
                      padding: '6px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                      fontWeight: '500',
                    }}
                  >
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
                    0 pce
                  </td>
                  <td style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '170px' }}>
                      <div
                        aria-hidden="true"
                        style={{
                          flex: '1',
                          display: 'flex',
                          height: '8px',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          background: 'var(--color-neutral-bg)',
                        }}
                      >
                        <div style={{ width: '100%', background: 'var(--color-primary)' }}></div>
                        <div style={{ width: '0%', background: 'var(--color-warning)' }}></div>
                      </div>
                      <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>18 pce</span>
                    </div>
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
                    81 000 FCFA
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
                      <Icon name="alert" size={14} />
                      Sous seuil
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
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              color: 'var(--color-text-muted)',
              fontSize: '13px',
            }}
          >
            <span>5 produits, 25 lignes par page</span>
            <span>
              Valeur totale du dépôt : <strong style={{ color: 'var(--color-text)' }}>11 641 000 FCFA</strong>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
