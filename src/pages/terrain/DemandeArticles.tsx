import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Terrain, Nouvelle demande, articles — maquette « Terrain-Demande-Articles.dc.html ». */
export default function TerrainDemandeArticles() {
  useDocumentTitle('EGA Terrain, Nouvelle demande, articles');
  const v = useScreenState({ g: false }, (s, set) => {
    const r = {} as Record<string, any>;
    r.g = !!s.g;
    r.gNot = !s.g;
    r.gOn = () => set({ g: true });
    r.gOff = () => set({ g: false });
    r.nArt = s.g ? '3 articles' : '2 articles';
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
            <Link
              to="/terrain/demande-chantier"
              aria-label="Retour"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '48px',
                marginLeft: '-12px',
                flex: 'none',
                color: 'var(--color-on-primary)',
              }}
            >
              <Icon name="chevronLeft" size={24} />
            </Link>
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
                Nouvelle demande
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
                Chantier Marcory
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
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                <Icon name="offline" size={14} />
                Hors-ligne
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
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '20px',
                fontWeight: '700',
              }}
            >
              Articles
            </span>
            <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Étape 2 sur 4</span>
          </div>
          <div
            aria-hidden="true"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '6px' }}
          >
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'rgba(255,255,255,0.18)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'rgba(255,255,255,0.18)' }}></div>
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              height: '48px',
              boxSizing: 'border-box',
              padding: '0 12px',
              border: '1px solid var(--color-border)',
              borderRadius: '10px',
              background: 'var(--color-surface)',
              color: 'var(--color-text-muted)',
            }}
          >
            <Icon name="search" size={18} />
            <label htmlFor="da-q" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}>
              Rechercher un article
            </label>
            <input
              id="da-q"
              type="search"
              placeholder="Nom, SKU ou catégorie"
              style={{
                flex: '1',
                minWidth: '0',
                border: '0',
                outline: '0',
                background: 'transparent',
                fontFamily: 'inherit',
                fontSize: '16px',
                color: 'var(--color-text)',
              }}
            />
          </div>
          <Link
            to="/terrain/scan"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minHeight: '56px',
              padding: '8px 16px 8px 10px',
              border: '2px dashed var(--color-accent)',
              borderRadius: '16px',
              background: 'rgba(245,124,0,0.08)',
              color: 'var(--color-primary)',
              textDecoration: 'none',
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
                background: 'rgba(245,124,0,0.20)',
                color: 'var(--color-primary)',
              }}
            >
              <Icon name="scan" />
            </span>
            <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontWeight: '700' }}>Scanner un article</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Code-barres ou QR code</span>
            </span>
            <Icon name="chevronRight" />
          </Link>
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
              Articles récents
            </h2>
            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>{v.nArt} dans la demande</span>
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '60px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
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
              <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontWeight: '500' }}>Disjoncteur 20 A</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>PRD-005, Énergie et solaire</span>
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
                Ajouté
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '60px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
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
              <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontWeight: '500' }}>Câble R2V 3G2.5</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>PRD-001, Câbles</span>
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
                Ajouté
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '60px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
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
              <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontWeight: '500' }}>Gaine ICTA Ø20</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>PRD-002, Gaines</span>
              </span>
              <span>
                {v.gNot && (
                  <>
                    <button
                      type="button"
                      style={{
                        minHeight: '44px',
                        padding: '0 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--color-text-muted)',
                        background: 'var(--color-surface)',
                        color: 'var(--color-text)',
                        fontFamily: 'inherit',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                      }}
                      onClick={v.gOn}
                    >
                      Ajouter
                    </button>
                  </>
                )}
                {v.g && (
                  <>
                    <button
                      type="button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        minHeight: '44px',
                        padding: '0 12px',
                        borderRadius: '16px',
                        border: '0',
                        background: 'var(--color-success-bg)',
                        color: 'var(--color-success-text)',
                        fontFamily: 'inherit',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                      }}
                      onClick={v.gOff}
                    >
                      <Icon name="check" size={14} />
                      Ajouté
                    </button>
                  </>
                )}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minHeight: '60px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
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
              <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontWeight: '500' }}>Onduleur 5 kVA</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>PRD-003, Énergie et solaire</span>
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Série requise</span>
            </div>
          </div>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <Link
            to="/terrain/demande"
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
            Continuer
          </Link>
        </div>
      </div>
    </div>
  );
}
