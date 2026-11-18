import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Terrain, Accueil — maquette « Terrain-Accueil.dc.html ». */
export default function TerrainAccueil() {
  useDocumentTitle('EGA Terrain, Accueil');
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
                Accueil
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
                Synchronisé à 10:12
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
                <Icon name="clock" size={14} />1 en attente
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Votre chantier</span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '22px',
                fontWeight: '700',
              }}
            >
              Chantier Marcory
            </span>
          </div>
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
                1
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Bon à recevoir</span>
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
                2
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Demandes</span>
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
              <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>À envoyer</span>
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
              En route vers vous
            </h2>
          </div>
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
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
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
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
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
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
            <Link
              to="/terrain/scan"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                minHeight: '76px',
                padding: '8px 4px',
                background: 'var(--color-surface)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-card)',
                color: 'var(--color-primary)',
                fontSize: '12px',
                fontWeight: '600',
                textAlign: 'center',
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
                  background: 'var(--color-accent-soft)',
                  color: 'var(--color-primary)',
                }}
              >
                <Icon name="scan" size={16} />
              </span>
              Scanner
            </Link>
            <Link
              to="/terrain/retour"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                minHeight: '76px',
                padding: '8px 4px',
                background: 'var(--color-surface)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-card)',
                color: 'var(--color-primary)',
                fontSize: '12px',
                fontWeight: '600',
                textAlign: 'center',
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
                  background: 'var(--color-accent-soft)',
                  color: 'var(--color-primary)',
                }}
              >
                <Icon name="refresh" size={16} />
              </span>
              Retour chantier
            </Link>
            <Link
              to="/terrain/bons"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                minHeight: '76px',
                padding: '8px 4px',
                background: 'var(--color-surface)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-card)',
                color: 'var(--color-primary)',
                fontSize: '12px',
                fontWeight: '600',
                textAlign: 'center',
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
                  background: 'var(--color-accent-soft)',
                  color: 'var(--color-primary)',
                }}
              >
                <Icon name="document" size={16} />
              </span>
              Mes bons
            </Link>
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
              Demandes en cours
            </h2>
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
              to="/terrain/demandes"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                padding: '8px 16px',
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
                <Icon name="check" size={16} />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: '500' }}>
                    BS-2026-0047
                  </span>
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>2 onduleurs 5 kVA</span>
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
                Validé
              </span>
            </Link>
            <Link
              to="/terrain/demandes"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                padding: '8px 16px',
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
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <Icon name="arrowUp" size={16} />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>10 disjoncteurs 20 A</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Aujourd'hui, 08:40</span>
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
                <Icon name="clock" size={14} />À envoyer
              </span>
            </Link>
          </div>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <Link
            to="/terrain/demande-chantier"
            style={{
              boxSizing: 'border-box',
              textDecoration: 'none',
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
          >
            <Icon name="plus" />
            Nouvelle demande
          </Link>
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
