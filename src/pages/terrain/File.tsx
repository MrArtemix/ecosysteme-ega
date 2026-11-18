import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Terrain, File d'envoi — maquette « Terrain-File.dc.html ». */
export default function TerrainFile() {
  useDocumentTitle("EGA Terrain, File d'envoi");
  const v = useScreenState({ sent: false, err: false }, (s, set) => {
    const r = {} as Record<string, any>;
    r.sent = !!s.sent;
    r.sentNot = !s.sent;
    r.sentOn = () => set({ sent: true });
    r.sentOff = () => set({ sent: false });
    r.err = !!s.err;
    r.errNot = !s.err;
    r.errOn = () => set({ err: true });
    r.errOff = () => set({ err: false });
    r.fPend = s.sent ? '0' : '2';
    r.fSent = s.sent ? '3' : '1';
    r.fPill = s.sent ? 'File vide' : '2 en attente';
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
                File d'envoi
              </h1>
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--color-on-primary-muted)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Rien n'est supprimé avant l'envoi
              </span>
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
                  background: 'var(--color-warning-bg)',
                  color: 'var(--color-warning-text)',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                <Icon name="clock" size={14} />
                {v.fPill}
              </Link>
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
                {v.fPend}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>En attente</span>
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
                {v.fSent}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Envoyées</span>
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
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>En erreur</span>
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
            {v.sentNot && (
              <>
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
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      minHeight: '60px',
                      padding: '10px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                    }}
                  >
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
                      <Icon name="refresh" />
                    </span>
                    <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontWeight: '500' }}>
                        Réception{' '}
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: '500' }}>
                          BS-2026-0042
                        </span>
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                        Envoi de la photo, 1 fichier sur 2
                      </span>
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'block',
                          height: '6px',
                          borderRadius: '6px',
                          background: 'var(--color-neutral-bg)',
                        }}
                      >
                        <span
                          style={{
                            display: 'block',
                            width: '50%',
                            height: '6px',
                            borderRadius: '6px',
                            background: 'var(--color-accent)',
                          }}
                        ></span>
                      </span>
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-warning-text)' }}>
                      50 %
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      minHeight: '60px',
                      padding: '10px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                    }}
                  >
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
                        background: 'var(--color-neutral-bg)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <Icon name="arrowUp" />
                    </span>
                    <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontWeight: '500' }}>Demande de 10 disjoncteurs</span>
                      <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                        Créée à 08:40, Chantier Marcory
                      </span>
                    </span>
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
                      <Icon name="clock" size={14} />
                      En attente
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      minHeight: '60px',
                      padding: '10px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                    }}
                  >
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
                    <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontWeight: '500' }}>Retour de 35 m de câble</span>
                      <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Envoyé à 09:55</span>
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
                        fontSize: '12px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="check" size={14} />
                      Envoyée
                    </span>
                  </div>
                </div>
              </>
            )}
            {v.sent && (
              <>
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
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      minHeight: '60px',
                      padding: '10px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                    }}
                  >
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
                    <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontWeight: '500' }}>
                        Réception{' '}
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: '500' }}>
                          BS-2026-0042
                        </span>
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                        Envoyée à l'instant, photo et signature jointes
                      </span>
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
                        fontSize: '12px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="check" size={14} />
                      Envoyée
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      minHeight: '60px',
                      padding: '10px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                    }}
                  >
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
                    <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontWeight: '500' }}>Demande de 10 disjoncteurs</span>
                      <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                        Envoyée à l'instant,{' '}
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '500' }}>
                          BS-2026-0048
                        </span>
                      </span>
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
                        fontSize: '12px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="check" size={14} />
                      Envoyée
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      minHeight: '60px',
                      padding: '10px 16px',
                      borderBottom: '1px solid var(--color-divider)',
                    }}
                  >
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
                    <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontWeight: '500' }}>Retour de 35 m de câble</span>
                      <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Envoyé à 09:55</span>
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
                        fontSize: '12px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Icon name="check" size={14} />
                      Envoyée
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '16px',
              background: 'var(--color-surface)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                  background: 'var(--color-danger-bg)',
                  color: 'var(--color-danger-text)',
                }}
              >
                <Icon name="alert" />
              </span>
              <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontWeight: '600' }}>
                  Réception{' '}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: '500' }}>
                    BS-2026-0036
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  Refusée par le serveur à 09:31
                </span>
              </span>
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
                Erreur
              </span>
            </div>
            <p
              style={{
                margin: '0',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'var(--color-danger-bg)',
                color: 'var(--color-danger-text)',
                fontSize: '14px',
              }}
            >
              Cette action n'est plus possible : le mouvement est au statut Annulé.
            </p>
            <p style={{ margin: '0', fontSize: '13px', color: 'var(--color-text-muted)' }}>
              La photo et la signature restent sur le téléphone. L'administrateur a été prévenu.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minHeight: '48px',
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
                onClick={v.errOn}
              >
                <Icon name="refresh" />
                Relancer
              </button>
              <Link
                to="/terrain/demande-chantier"
                style={{
                  boxSizing: 'border-box',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minHeight: '48px',
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
                <Icon name="copy" />
                Copier en nouvelle demande
              </Link>
            </div>
          </div>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <button
            type="button"
            style={{
              width: '100%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              minHeight: '56px',
              padding: '0 16px',
              borderRadius: '10px',
              fontFamily: 'inherit',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              background: 'var(--color-accent)',
              color: 'var(--color-primary)',
              border: '1px solid var(--color-accent)',
              boxShadow: 'var(--shadow-accent)',
            }}
            onClick={v.sentOn}
          >
            <Icon name="refresh" />
            Relancer l'envoi
          </button>
        </div>
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
              <Icon name="document" />
            </span>
            Bons
          </Link>
          <Link
            to="/terrain/plus"
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
              <Icon name="more" />
            </span>
            Plus
          </Link>
        </nav>
        {v.err && (
          <>
            <div
              role="status"
              style={{
                position: 'absolute',
                left: '16px',
                right: '16px',
                bottom: '96px',
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
                Toujours refusée : le bon BS-2026-0036 est annulé. Contactez l'administrateur.
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
                onClick={v.errOff}
              >
                <Icon name="close" size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
