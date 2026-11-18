import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Direction, Alertes — maquette « Direction-Alertes.dc.html ». */
export default function DirectionAlertes() {
  useDocumentTitle('EGA Direction, Alertes');
  const v = useScreenState({ flt: 'non' }, (s, set) => {
    const r = {} as Record<string, any>;
    r.flt_is_non = s.flt === 'non';
    r.flt_set_non = () => set({ flt: 'non' });
    r.flt_is_all = s.flt === 'all';
    r.flt_set_all = () => set({ flt: 'all' });
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
                Alertes
              </h1>
            </div>
            <span
              style={{ display: 'inline-flex', flex: 'none', borderRadius: '16px', background: 'var(--color-surface)' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                  fontSize: '13px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
              >
                <Icon name="check" size={14} />
                En direct
              </span>
            </span>
          </div>
        </header>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '4px 16px 20px',
            color: 'var(--color-on-primary)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.10)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '22px',
                  fontWeight: '700',
                  lineHeight: '1.15',
                }}
              >
                4
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>À traiter</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.10)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '22px',
                  fontWeight: '700',
                  lineHeight: '1.15',
                }}
              >
                1
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Traitée</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.10)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '22px',
                  fontWeight: '700',
                  lineHeight: '1.15',
                }}
              >
                5
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Au total</span>
            </div>
          </div>
        </div>
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
            {v.flt_is_non && (
              <>
                <div
                  role="group"
                  aria-label="Filtre"
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
                    Non traitées (4)
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
                    onClick={v.flt_set_all}
                  >
                    Toutes (5)
                  </button>
                </div>
              </>
            )}
            {v.flt_is_all && (
              <>
                <div
                  role="group"
                  aria-label="Filtre"
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
                    onClick={v.flt_set_non}
                  >
                    Non traitées (4)
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
                    Toutes (5)
                  </button>
                </div>
              </>
            )}
          </div>
          <div>
            {v.flt_is_non && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'var(--color-surface)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <Link
                      to="/direction/mouvement"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-warning-bg)',
                          color: 'var(--color-warning-text)',
                        }}
                      >
                        <Icon name="arrowUp" size={16} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
                        >
                          <span style={{ fontWeight: '600' }}>Sortie au-dessus du seuil</span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px 3px 8px',
                              borderRadius: '16px',
                              background: 'var(--color-danger-bg)',
                              color: 'var(--color-danger-text)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Icon name="alert" size={14} />
                            Non traitée
                          </span>
                        </span>
                        <span style={{ fontSize: '14px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                            BS-2026-0043
                          </span>{' '}
                          : 1 600 000 FCFA, validée automatiquement.
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          Chantier Riviera 4, mag1.test, 10:10
                        </span>
                      </span>
                    </Link>
                    <Link
                      to="/direction/mouvement"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-danger-bg)',
                          color: 'var(--color-danger-text)',
                        }}
                      >
                        <Icon name="alert" size={16} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
                        >
                          <span style={{ fontWeight: '600' }}>Écart de livraison</span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px 3px 8px',
                              borderRadius: '16px',
                              background: 'var(--color-danger-bg)',
                              color: 'var(--color-danger-text)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Icon name="alert" size={14} />
                            Non traitée
                          </span>
                        </span>
                        <span style={{ fontSize: '14px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                            BS-2026-0042
                          </span>{' '}
                          : 36 pce reçues sur 40. Motif : Manquant.
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          Chantier Marcory, agent1.test, 11:20
                        </span>
                      </span>
                    </Link>
                    <Link
                      to="/direction/mouvement"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-warning-bg)',
                          color: 'var(--color-warning-text)',
                        }}
                      >
                        <Icon name="moon" size={16} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
                        >
                          <span style={{ fontWeight: '600' }}>Mouvement hors horaires</span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px 3px 8px',
                              borderRadius: '16px',
                              background: 'var(--color-danger-bg)',
                              color: 'var(--color-danger-text)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Icon name="alert" size={14} />
                            Non traitée
                          </span>
                        </span>
                        <span style={{ fontSize: '14px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                            BS-2026-0041
                          </span>{' '}
                          créé à 22:04 par mag1.test.
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          Hier, Dépôt Principal EGA
                        </span>
                      </span>
                    </Link>
                    <Link
                      to="/direction/mouvement"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-warning-bg)',
                          color: 'var(--color-warning-text)',
                        }}
                      >
                        <Icon name="tag" size={16} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
                        >
                          <span style={{ fontWeight: '600' }}>Modification de prix</span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px 3px 8px',
                              borderRadius: '16px',
                              background: 'var(--color-danger-bg)',
                              color: 'var(--color-danger-text)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Icon name="alert" size={14} />
                            Non traitée
                          </span>
                        </span>
                        <span style={{ fontSize: '14px' }}>Onduleur 5 kVA : 800 000 FCFA devient 825 000 FCFA.</span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          admin.test, hier à 16:30
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </>
            )}
            {v.flt_is_all && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'var(--color-surface)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <Link
                      to="/direction/mouvement"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-warning-bg)',
                          color: 'var(--color-warning-text)',
                        }}
                      >
                        <Icon name="arrowUp" size={16} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
                        >
                          <span style={{ fontWeight: '600' }}>Sortie au-dessus du seuil</span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px 3px 8px',
                              borderRadius: '16px',
                              background: 'var(--color-danger-bg)',
                              color: 'var(--color-danger-text)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Icon name="alert" size={14} />
                            Non traitée
                          </span>
                        </span>
                        <span style={{ fontSize: '14px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                            BS-2026-0043
                          </span>{' '}
                          : 1 600 000 FCFA, validée automatiquement.
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          Chantier Riviera 4, mag1.test, 10:10
                        </span>
                      </span>
                    </Link>
                    <Link
                      to="/direction/mouvement"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-danger-bg)',
                          color: 'var(--color-danger-text)',
                        }}
                      >
                        <Icon name="alert" size={16} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
                        >
                          <span style={{ fontWeight: '600' }}>Écart de livraison</span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px 3px 8px',
                              borderRadius: '16px',
                              background: 'var(--color-danger-bg)',
                              color: 'var(--color-danger-text)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Icon name="alert" size={14} />
                            Non traitée
                          </span>
                        </span>
                        <span style={{ fontSize: '14px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                            BS-2026-0042
                          </span>{' '}
                          : 36 pce reçues sur 40. Motif : Manquant.
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          Chantier Marcory, agent1.test, 11:20
                        </span>
                      </span>
                    </Link>
                    <Link
                      to="/direction/mouvement"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-warning-bg)',
                          color: 'var(--color-warning-text)',
                        }}
                      >
                        <Icon name="moon" size={16} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
                        >
                          <span style={{ fontWeight: '600' }}>Mouvement hors horaires</span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px 3px 8px',
                              borderRadius: '16px',
                              background: 'var(--color-danger-bg)',
                              color: 'var(--color-danger-text)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Icon name="alert" size={14} />
                            Non traitée
                          </span>
                        </span>
                        <span style={{ fontSize: '14px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                            BS-2026-0041
                          </span>{' '}
                          créé à 22:04 par mag1.test.
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          Hier, Dépôt Principal EGA
                        </span>
                      </span>
                    </Link>
                    <Link
                      to="/direction/mouvement"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-warning-bg)',
                          color: 'var(--color-warning-text)',
                        }}
                      >
                        <Icon name="tag" size={16} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
                        >
                          <span style={{ fontWeight: '600' }}>Modification de prix</span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px 3px 8px',
                              borderRadius: '16px',
                              background: 'var(--color-danger-bg)',
                              color: 'var(--color-danger-text)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Icon name="alert" size={14} />
                            Non traitée
                          </span>
                        </span>
                        <span style={{ fontSize: '14px' }}>Onduleur 5 kVA : 800 000 FCFA devient 825 000 FCFA.</span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          admin.test, hier à 16:30
                        </span>
                      </span>
                    </Link>
                    <Link
                      to="/direction/mouvement"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--color-border)',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          flex: 'none',
                          borderRadius: '10px',
                          background: 'var(--color-neutral-bg)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        <Icon name="box" size={16} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}
                        >
                          <span style={{ fontWeight: '600' }}>Rupture imminente</span>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 10px 3px 8px',
                              borderRadius: '16px',
                              background: 'var(--color-neutral-bg)',
                              color: 'var(--color-text-muted)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Icon name="check" size={14} />
                            Traitée
                          </span>
                        </span>
                        <span style={{ fontSize: '14px' }}>Disjoncteur 20 A : 18 pce en stock, seuil de 20.</span>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                          Dépôt Principal EGA, 12/11/2026
                        </span>
                      </span>
                    </Link>
                  </div>
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
            to="/direction/tour"
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
              <Icon name="grid" />
            </span>
            Tour de contrôle
          </Link>
          <Link
            to="/direction/alertes"
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
              <Icon name="bell" />
            </span>
            Alertes
            <span
              style={{
                position: 'absolute',
                top: '2px',
                left: '50%',
                marginLeft: '10px',
                minWidth: '18px',
                height: '18px',
                boxSizing: 'border-box',
                padding: '0 5px',
                borderRadius: '9px',
                background: 'var(--color-danger)',
                color: 'var(--color-on-primary)',
                fontSize: '11px',
                fontWeight: '700',
                lineHeight: '18px',
                textAlign: 'center',
              }}
            >
              4
            </span>
          </Link>
          <Link
            to="/direction/stock"
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
              <Icon name="box" />
            </span>
            Stock
          </Link>
          <Link
            to="/direction/parametres"
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
              <Icon name="sliders" />
            </span>
            Paramètres
          </Link>
        </nav>
      </div>
    </div>
  );
}
