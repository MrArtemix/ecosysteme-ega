import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Direction, Paramètres — maquette « Direction-Parametres.dc.html ». */
export default function DirectionParametres() {
  useDocumentTitle('EGA Direction, Paramètres');
  const v = useScreenState({ toast: false }, (s, set) => {
    const r = {} as Record<string, any>;
    r.toast = !!s.toast;
    r.toastNot = !s.toast;
    r.toastOn = () => set({ toast: true });
    r.toastOff = () => set({ toast: false });
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
                Paramètres
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
              flexDirection: 'column',
              gap: '8px',
              padding: '16px',
              background: 'var(--color-surface)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label
                htmlFor="pa-seuil"
                style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
              >
                Seuil d'alerte (FCFA)
              </label>
              <input
                id="pa-seuil"
                type="text"
                defaultValue="500 000"
                style={{
                  boxSizing: 'border-box',
                  width: '100%',
                  height: '48px',
                  padding: '0 12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                }}
              />
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                Au-dessus de ce montant, vous recevez une alerte. La sortie n'est pas bloquée.
              </span>
            </div>
            <div style={{ display: 'flex', gap: '12px', paddingTop: '4px' }}>
              <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  htmlFor="pa-h1"
                  style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                >
                  Début des horaires
                </label>
                <input
                  id="pa-h1"
                  type="text"
                  defaultValue="06:00"
                  style={{
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '48px',
                    padding: '0 12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    background: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    fontFamily: 'inherit',
                    fontSize: '16px',
                  }}
                />
              </div>
              <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  htmlFor="pa-h2"
                  style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                >
                  Fin des horaires
                </label>
                <input
                  id="pa-h2"
                  type="text"
                  defaultValue="20:00"
                  style={{
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '48px',
                    padding: '0 12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    background: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    fontFamily: 'inherit',
                    fontSize: '16px',
                  }}
                />
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
              Alertes actives
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
            <label
              htmlFor="pa-a0"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '44px',
                padding: '0 16px',
                borderBottom: '1px solid var(--color-divider)',
              }}
            >
              <span>Sortie au-dessus du seuil</span>
              <input id="pa-a0" type="checkbox" defaultChecked style={{ width: '22px', height: '22px' }} />
            </label>
            <label
              htmlFor="pa-a1"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '44px',
                padding: '0 16px',
                borderBottom: '1px solid var(--color-divider)',
              }}
            >
              <span>Rupture imminente</span>
              <input id="pa-a1" type="checkbox" defaultChecked style={{ width: '22px', height: '22px' }} />
            </label>
            <label
              htmlFor="pa-a2"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '44px',
                padding: '0 16px',
                borderBottom: '1px solid var(--color-divider)',
              }}
            >
              <span>Écart de livraison</span>
              <input id="pa-a2" type="checkbox" defaultChecked style={{ width: '22px', height: '22px' }} />
            </label>
            <label
              htmlFor="pa-a3"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '44px',
                padding: '0 16px',
                borderBottom: '1px solid var(--color-divider)',
              }}
            >
              <span>Modification de prix</span>
              <input id="pa-a3" type="checkbox" defaultChecked style={{ width: '22px', height: '22px' }} />
            </label>
            <label
              htmlFor="pa-a4"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '44px',
                padding: '0 16px',
                borderBottom: '1px solid var(--color-divider)',
              }}
            >
              <span>Mouvement hors horaires</span>
              <input id="pa-a4" type="checkbox" defaultChecked style={{ width: '22px', height: '22px' }} />
            </label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="pa-lang" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Langue
            </label>
            <select
              id="pa-lang"
              style={{
                boxSizing: 'border-box',
                width: '100%',
                height: '48px',
                padding: '0 12px',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                fontFamily: 'inherit',
                fontSize: '16px',
              }}
            >
              <option>Français</option>
              <option>English</option>
            </select>
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
            onClick={v.toastOn}
          >
            Enregistrer
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
              <Icon name="sliders" />
            </span>
            Paramètres
          </Link>
        </nav>
        {v.toast && (
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
                Paramètres enregistrés. Ils s'appliquent aux prochains mouvements.
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
    </div>
  );
}
