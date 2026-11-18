import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Terrain, Liste des bons — maquette « Terrain-Bons.dc.html ». */
export default function TerrainBons() {
  useDocumentTitle('EGA Terrain, Liste des bons');
  const v = useScreenState({ tb: 'tr' }, (s, set) => {
    const r = {} as Record<string, any>;
    r.tb_is_ar = s.tb === 'ar';
    r.tb_set_ar = () => set({ tb: 'ar' });
    r.tb_is_tr = s.tb === 'tr';
    r.tb_set_tr = () => set({ tb: 'tr' });
    r.tb_is_te = s.tb === 'te';
    r.tb_set_te = () => set({ tb: 'te' });
    return r;
  });
  return (
    <div className="mobile-stage">
      <div
        style={{
          position: 'relative',
          width: 'var(--mobile-frame-width)',
          height: 'var(--mobile-frame-height)',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: 'var(--color-primary)',
          color: 'var(--color-text)',
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        <header
          style={{
            position: 'relative',
            height: '64px',
            flex: 'none',
            boxSizing: 'border-box',
            padding: '0 16px',
            overflow: 'hidden',
            color: 'var(--color-on-primary)',
          }}
        >
          <Pattern variant="header" style={{ position: 'absolute', right: '-8px', top: '-6px' }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', height: '64px' }}>
            <Logo size={32} radius={8} fontSize={11} />
            <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <h1
                style={{
                  margin: '0',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '17px',
                  fontWeight: '700',
                  color: 'var(--color-on-primary)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Bons
              </h1>
            </div>
            <span
              style={{ display: 'inline-flex', flex: 'none', borderRadius: '16px', background: 'var(--color-surface)' }}
            >
              <Link
                to="/terrain/file"
                style={{
                  boxSizing: 'border-box',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  minHeight: '32px',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  border: '0',
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                <Icon name="check" size={14} />
                En ligne
              </Link>
            </span>
          </div>
        </header>
        <main
          style={{
            flex: '1',
            minHeight: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '20px 16px 0',
            overflow: 'hidden',
            background: 'var(--color-background)',
            borderRadius: '16px 16px 0 0',
          }}
        >
          <div>
            {v.tb_is_ar && (
              <>
                <div
                  role="group"
                  aria-label="Statut des bons"
                  style={{
                    display: 'flex',
                    gap: '4px',
                    padding: '4px',
                    borderRadius: '10px',
                    background: 'var(--color-neutral-bg)',
                  }}
                >
                  <button
                    type="button"
                    aria-pressed="true"
                    style={{
                      flex: '1',
                      minHeight: '44px',
                      padding: '0 4px',
                      border: '0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-primary)',
                      fontWeight: '700',
                      boxShadow: '0 1px 3px rgba(15,41,66,0.16)',
                    }}
                  >
                    À recevoir
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      flex: '1',
                      minHeight: '44px',
                      padding: '0 4px',
                      border: '0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.tb_set_tr}
                  >
                    En transit
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      flex: '1',
                      minHeight: '44px',
                      padding: '0 4px',
                      border: '0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.tb_set_te}
                  >
                    Terminés
                  </button>
                </div>
              </>
            )}
            {v.tb_is_tr && (
              <>
                <div
                  role="group"
                  aria-label="Statut des bons"
                  style={{
                    display: 'flex',
                    gap: '4px',
                    padding: '4px',
                    borderRadius: '10px',
                    background: 'var(--color-neutral-bg)',
                  }}
                >
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      flex: '1',
                      minHeight: '44px',
                      padding: '0 4px',
                      border: '0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.tb_set_ar}
                  >
                    À recevoir
                  </button>
                  <button
                    type="button"
                    aria-pressed="true"
                    style={{
                      flex: '1',
                      minHeight: '44px',
                      padding: '0 4px',
                      border: '0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-primary)',
                      fontWeight: '700',
                      boxShadow: '0 1px 3px rgba(15,41,66,0.16)',
                    }}
                  >
                    En transit
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      flex: '1',
                      minHeight: '44px',
                      padding: '0 4px',
                      border: '0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.tb_set_te}
                  >
                    Terminés
                  </button>
                </div>
              </>
            )}
            {v.tb_is_te && (
              <>
                <div
                  role="group"
                  aria-label="Statut des bons"
                  style={{
                    display: 'flex',
                    gap: '4px',
                    padding: '4px',
                    borderRadius: '10px',
                    background: 'var(--color-neutral-bg)',
                  }}
                >
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      flex: '1',
                      minHeight: '44px',
                      padding: '0 4px',
                      border: '0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.tb_set_ar}
                  >
                    À recevoir
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    style={{
                      flex: '1',
                      minHeight: '44px',
                      padding: '0 4px',
                      border: '0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.tb_set_tr}
                  >
                    En transit
                  </button>
                  <button
                    type="button"
                    aria-pressed="true"
                    style={{
                      flex: '1',
                      minHeight: '44px',
                      padding: '0 4px',
                      border: '0',
                      borderRadius: '8px',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-primary)',
                      fontWeight: '700',
                      boxShadow: '0 1px 3px rgba(15,41,66,0.16)',
                    }}
                  >
                    Terminés
                  </button>
                </div>
              </>
            )}
          </div>
          <div>
            {v.tb_is_ar && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '32px 16px',
                      textAlign: 'center',
                      background: 'var(--color-surface)',
                      borderRadius: '16px',
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
                      <Icon name="document" />
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-0.01em',
                        fontSize: '17px',
                        fontWeight: '600',
                      }}
                    >
                      Aucun bon à recevoir
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                      Les sorties validées pour le Chantier Marcory apparaîtront ici avant leur expédition.
                    </span>
                  </div>
                </div>
              </>
            )}
            {v.tb_is_tr && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link
                    to="/terrain/bon"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      padding: '16px',
                      background: 'var(--color-surface)',
                      borderRadius: '16px',
                      boxShadow: 'var(--shadow-card)',
                      color: 'var(--color-text)',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-warning-bg)',
                          color: 'var(--color-warning-text)',
                        }}
                      >
                        <Icon name="truck" />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontWeight: '600' }}>Gaine ICTA Ø20, 40 pce</span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '500' }}>
                            BS-2026-0042
                          </span>
                          , expédié à 10:05
                        </span>
                      </span>
                      <Icon name="chevronRight" style={{ color: 'var(--color-text-muted)' }} />
                    </span>
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
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
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
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Validé
                        </span>
                      </li>
                      <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          <span style={{ flex: '1', height: '2px', background: 'var(--color-success)' }}></span>
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              flex: 'none',
                              boxSizing: 'border-box',
                              borderRadius: '50%',
                              background: 'var(--color-surface)',
                              border: '6px solid var(--color-accent)',
                            }}
                          ></span>
                          <span style={{ flex: '1', height: '2px', background: 'var(--color-border)' }}></span>
                        </span>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          En transit
                        </span>
                      </li>
                      <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          <span style={{ flex: '1', height: '2px', background: 'var(--color-border)' }}></span>
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              flex: 'none',
                              boxSizing: 'border-box',
                              borderRadius: '50%',
                              background: 'var(--color-surface)',
                              border: '2px solid var(--color-border)',
                            }}
                          ></span>
                          <span style={{ flex: '1', height: '2px', background: 'transparent' }}></span>
                        </span>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'var(--color-text-muted)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Reçu
                        </span>
                      </li>
                    </ol>
                  </Link>
                  <Link
                    to="/terrain/bon"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      padding: '16px',
                      background: 'var(--color-surface)',
                      borderRadius: '16px',
                      boxShadow: 'var(--shadow-card)',
                      color: 'var(--color-text)',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-warning-bg)',
                          color: 'var(--color-warning-text)',
                        }}
                      >
                        <Icon name="truck" />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontWeight: '600' }}>Câble R2V 3G2.5, 100 m</span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '500' }}>
                            BS-2026-0045
                          </span>
                          , expédié à 10:40
                        </span>
                      </span>
                      <Icon name="chevronRight" style={{ color: 'var(--color-text-muted)' }} />
                    </span>
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
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
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
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Validé
                        </span>
                      </li>
                      <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          <span style={{ flex: '1', height: '2px', background: 'var(--color-success)' }}></span>
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              flex: 'none',
                              boxSizing: 'border-box',
                              borderRadius: '50%',
                              background: 'var(--color-surface)',
                              border: '6px solid var(--color-accent)',
                            }}
                          ></span>
                          <span style={{ flex: '1', height: '2px', background: 'var(--color-border)' }}></span>
                        </span>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          En transit
                        </span>
                      </li>
                      <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          <span style={{ flex: '1', height: '2px', background: 'var(--color-border)' }}></span>
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              flex: 'none',
                              boxSizing: 'border-box',
                              borderRadius: '50%',
                              background: 'var(--color-surface)',
                              border: '2px solid var(--color-border)',
                            }}
                          ></span>
                          <span style={{ flex: '1', height: '2px', background: 'transparent' }}></span>
                        </span>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: 'var(--color-text-muted)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Reçu
                        </span>
                      </li>
                    </ol>
                  </Link>
                  <p style={{ margin: '0', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                    Bons du Chantier Marcory, le plus ancien en premier.
                  </p>
                </div>
              </>
            )}
            {v.tb_is_te && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link
                    to="/terrain/bon"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      padding: '16px',
                      background: 'var(--color-surface)',
                      borderRadius: '16px',
                      boxShadow: 'var(--shadow-card)',
                      color: 'var(--color-text)',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-success-bg)',
                          color: 'var(--color-success-text)',
                        }}
                      >
                        <Icon name="check" />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontWeight: '600' }}>Câble R2V 3G2.5, 100 m</span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '500' }}>
                            BS-2026-0031
                          </span>
                          , reçu le 12/11/2026
                        </span>
                      </span>
                      <Icon name="chevronRight" style={{ color: 'var(--color-text-muted)' }} />
                    </span>
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
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
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
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
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
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
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
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--color-text)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Reçu
                        </span>
                      </li>
                    </ol>
                  </Link>
                  <p style={{ margin: '0', fontSize: '12px', color: 'var(--color-text-muted)' }}>
                    1 bon terminé sur les 30 derniers jours.
                  </p>
                </div>
              </>
            )}
          </div>
        </main>
        <nav
          aria-label="Navigation principale"
          style={{
            display: 'flex',
            padding: '0 4px',
            background: 'var(--color-surface)',
            boxShadow: '0 -1px 0 var(--color-border), 0 -8px 24px rgba(15,41,66,0.06)',
          }}
        >
          <Link
            to="/terrain/accueil"
            style={{
              position: 'relative',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              minHeight: '64px',
              color: 'var(--color-text-muted)',
              fontSize: '11px',
              fontWeight: '500',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '28px',
                borderRadius: '16px',
                background: 'transparent',
              }}
            >
              <Icon name="home" />
            </span>
            Accueil
          </Link>
          <Link
            to="/terrain/demandes"
            style={{
              position: 'relative',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              minHeight: '64px',
              color: 'var(--color-text-muted)',
              fontSize: '11px',
              fontWeight: '500',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '28px',
                borderRadius: '16px',
                background: 'transparent',
              }}
            >
              <Icon name="list" />
            </span>
            Demandes
          </Link>
          <Link
            to="/terrain/bons"
            aria-current="page"
            style={{
              position: 'relative',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              minHeight: '64px',
              color: 'var(--color-primary)',
              fontSize: '11px',
              fontWeight: '700',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '28px',
                borderRadius: '16px',
                background: 'var(--color-accent-soft)',
                color: 'var(--color-primary)',
              }}
            >
              <Icon name="document" />
            </span>
            Bons
          </Link>
          <Link
            to="/terrain/plus"
            style={{
              position: 'relative',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              minHeight: '64px',
              color: 'var(--color-text-muted)',
              fontSize: '11px',
              fontWeight: '500',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '28px',
                borderRadius: '16px',
                background: 'transparent',
              }}
            >
              <Icon name="more" />
            </span>
            Plus
          </Link>
        </nav>
      </div>
    </div>
  );
}
