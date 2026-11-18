import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Direction, Tour de contrôle — maquette « Direction-Tour.dc.html ». */
export default function DirectionTour() {
  useDocumentTitle('EGA Direction, Tour de contrôle');
  const v = useScreenState({ per: 'j' }, (s, set) => {
    const r = {} as Record<string, any>;
    r.per_is_j = s.per === 'j';
    r.per_set_j = () => set({ per: 'j' });
    r.per_is_s = s.per === 's';
    r.per_set_s = () => set({ per: 's' });
    r.per_is_m = s.per === 'm';
    r.per_set_m = () => set({ per: 'm' });
    r.per_is_a = s.per === 'a';
    r.per_set_a = () => set({ per: 'a' });
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
                Tour de contrôle
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
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Valeur du stock</span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.02em',
                  fontSize: '32px',
                  fontWeight: '700',
                  lineHeight: '1.1',
                  whiteSpace: 'nowrap',
                }}
              >
                11 641 000{' '}
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-on-primary-muted)' }}>
                  FCFA
                </span>
              </span>
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 10px',
                borderRadius: '16px',
                background: 'var(--color-surface)',
                color: 'var(--color-success-text)',
                fontSize: '12px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
              }}
            >
              <Icon name="arrowUp" size={14} />+ 360 000
            </span>
          </div>
          <svg
            width="100%"
            height="52"
            viewBox="0 0 320 52"
            preserveAspectRatio="none"
            role="img"
            aria-label="Évolution de la valeur du stock sur 7 jours, en hausse"
          >
            <path
              d="M0 40 L53 36 L107 38 L160 28 L213 31 L267 20 L320 10 L320 52 L0 52 Z"
              fill="#FFFFFF"
              fillOpacity="0.10"
              stroke="none"
            />
            <path
              d="M0 40 L53 36 L107 38 L160 28 L213 31 L267 20 L320 10"
              fill="none"
              stroke="#F57C00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
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
                3
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Sorties du jour</span>
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
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Sous seuil</span>
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
                4
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Alertes</span>
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
            {v.per_is_j && (
              <>
                <div
                  role="group"
                  aria-label="Période"
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-primary)',
                      fontWeight: '700',
                      boxShadow: '0 1px 3px rgba(15,41,66,0.16)',
                    }}
                  >
                    Jour
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_s}
                  >
                    7 jours
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_m}
                  >
                    30 jours
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_a}
                  >
                    Autre
                  </button>
                </div>
              </>
            )}
            {v.per_is_s && (
              <>
                <div
                  role="group"
                  aria-label="Période"
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_j}
                  >
                    Jour
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-primary)',
                      fontWeight: '700',
                      boxShadow: '0 1px 3px rgba(15,41,66,0.16)',
                    }}
                  >
                    7 jours
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_m}
                  >
                    30 jours
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_a}
                  >
                    Autre
                  </button>
                </div>
              </>
            )}
            {v.per_is_m && (
              <>
                <div
                  role="group"
                  aria-label="Période"
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_j}
                  >
                    Jour
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_s}
                  >
                    7 jours
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-primary)',
                      fontWeight: '700',
                      boxShadow: '0 1px 3px rgba(15,41,66,0.16)',
                    }}
                  >
                    30 jours
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_a}
                  >
                    Autre
                  </button>
                </div>
              </>
            )}
            {v.per_is_a && (
              <>
                <div
                  role="group"
                  aria-label="Période"
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_j}
                  >
                    Jour
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_s}
                  >
                    7 jours
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--color-text-muted)',
                      fontWeight: '600',
                    }}
                    onClick={v.per_set_m}
                  >
                    30 jours
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
                      fontSize: '13px',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-primary)',
                      fontWeight: '700',
                      boxShadow: '0 1px 3px rgba(15,41,66,0.16)',
                    }}
                  >
                    Autre
                  </button>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '14px 16px',
              background: 'var(--color-surface)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <h2 style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>Sorties par chantier</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: '14px' }}>
                <span>Chantier Marcory</span>
                <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>300 000 FCFA</span>
              </div>
              <div
                aria-hidden="true"
                style={{ height: '8px', borderRadius: '6px', background: 'var(--color-neutral-bg)' }}
              >
                <div
                  style={{ width: '100%', height: '8px', borderRadius: '6px', background: 'var(--color-accent)' }}
                ></div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: '14px' }}>
                <span>Chantier Riviera 4</span>
                <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>0 FCFA</span>
              </div>
              <div
                aria-hidden="true"
                style={{ height: '8px', borderRadius: '6px', background: 'var(--color-neutral-bg)' }}
              >
                <div
                  style={{ width: '0%', height: '8px', borderRadius: '6px', background: 'var(--color-accent)' }}
                ></div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <h2
              style={{
                margin: '0',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '17px',
                fontWeight: '600',
              }}
            >
              Activité en direct
            </h2>
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Mis à jour à 10:14</span>
          </div>
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
                alignItems: 'center',
                gap: '12px',
                minHeight: '52px',
                padding: '6px 14px',
                borderBottom: '1px solid var(--color-divider)',
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
                <Icon name="alert" size={16} />
              </span>
              <span
                style={{
                  flex: '1',
                  minWidth: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  fontSize: '14px',
                }}
              >
                <span style={{ fontWeight: '500' }}>
                  Sortie{' '}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '500' }}>
                    BS-2026-0043
                  </span>{' '}
                  au-dessus du seuil
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  Validée, Chantier Riviera 4, 10:10
                </span>
              </span>
              <span style={{ fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap' }}>1 600 000</span>
            </Link>
            <Link
              to="/direction/mouvement"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '52px',
                padding: '6px 14px',
                borderBottom: '1px solid var(--color-divider)',
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
                <Icon name="truck" size={16} />
              </span>
              <span
                style={{
                  flex: '1',
                  minWidth: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  fontSize: '14px',
                }}
              >
                <span style={{ fontWeight: '500' }}>
                  Sortie{' '}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '500' }}>
                    BS-2026-0042
                  </span>{' '}
                  en transit
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Chantier Marcory, 10:05</span>
              </span>
              <span style={{ fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap' }}>120 000</span>
            </Link>
            <Link
              to="/direction/mouvement"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '52px',
                padding: '6px 14px',
                borderBottom: '1px solid var(--color-divider)',
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
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                }}
              >
                <Icon name="arrowDown" size={16} />
              </span>
              <span
                style={{
                  flex: '1',
                  minWidth: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  fontSize: '14px',
                }}
              >
                <span style={{ fontWeight: '500' }}>
                  Entrée{' '}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '500' }}>
                    BE-2026-0118
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>200 m de câble, 09:02</span>
              </span>
              <span style={{ fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap' }}>360 000</span>
            </Link>
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
              <Icon name="grid" />
            </span>
            Tour de contrôle
          </Link>
          <Link
            to="/direction/alertes"
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
