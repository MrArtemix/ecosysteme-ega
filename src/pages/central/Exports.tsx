import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Central, Exports — maquette « Central-Exports.dc.html ». */
export default function CentralExports() {
  useDocumentTitle('EGA Central, Exports');
  const v = useScreenState({ toast: false, notif: false }, (s, set) => {
    const r = {} as Record<string, any>;
    r.toast = !!s.toast;
    r.toastNot = !s.toast;
    r.toastOn = () => set({ toast: true });
    r.toastOff = () => set({ toast: false });
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
      <CentralSidebar active="/central/exports" role="admin" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Exports" title="Exports" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <h2
            style={{
              margin: '0',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.01em',
              fontSize: '17px',
              fontWeight: '600',
            }}
          >
            Type d'export
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <label
              htmlFor="x1"
              style={{
                flex: '1 1 240px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '16px',
                background: 'var(--color-surface)',
                border: '2px solid var(--color-primary)',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <input
                id="x1"
                type="radio"
                name="x-type"
                defaultChecked
                style={{ width: '16px', height: '16px', margin: '2px 0 0' }}
              />
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Mouvements</span>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Référence, date, type, statut, sites, produit, quantité, valeur, auteur
                </span>
              </span>
            </label>
            <label
              htmlFor="x2"
              style={{
                flex: '1 1 240px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '16px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <input id="x2" type="radio" name="x-type" style={{ width: '16px', height: '16px', margin: '2px 0 0' }} />
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Soldes par dépôt</span>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Dépôt, SKU, produit, en stock, réservé, disponible, valeur
                </span>
              </span>
            </label>
            <label
              htmlFor="x3"
              style={{
                flex: '1 1 240px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '16px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <input id="x3" type="radio" name="x-type" style={{ width: '16px', height: '16px', margin: '2px 0 0' }} />
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Valorisation par chantier</span>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Chantier, produit, quantité sortie, quantité retournée, valeur nette
                </span>
              </span>
            </label>
          </div>
          <h2
            style={{
              margin: '0',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.01em',
              fontSize: '17px',
              fontWeight: '600',
            }}
          >
            Filtres
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '12px' }}>
            <div style={{ flex: '1 1 220px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="x-per" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Période
              </label>
              <input
                id="x-per"
                type="text"
                defaultValue="01/11/2026 au 14/11/2026"
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
            <div style={{ flex: '1 1 180px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="x-site" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Site
              </label>
              <select
                id="x-site"
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
                <option>Tous les sites</option>
              </select>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="x-prod" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Produit
              </label>
              <select
                id="x-prod"
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
                <option>Tous les produits</option>
              </select>
            </div>
            <div style={{ flex: '1 1 180px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="x-st" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Statut
              </label>
              <select
                id="x-st"
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
                <option>Tous les statuts</option>
              </select>
            </div>
          </div>
          <h2
            style={{
              margin: '0',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.01em',
              fontSize: '17px',
              fontWeight: '600',
            }}
          >
            Format
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <label
              htmlFor="x4"
              style={{
                flex: '1 1 240px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '16px',
                background: 'var(--color-surface)',
                border: '2px solid var(--color-primary)',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <input
                id="x4"
                type="radio"
                name="x-fmt"
                defaultChecked
                style={{ width: '16px', height: '16px', margin: '2px 0 0' }}
              />
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Excel</span>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Une feuille, en-têtes figés, formats numériques natifs
                </span>
              </span>
            </label>
            <label
              htmlFor="x5"
              style={{
                flex: '1 1 240px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '16px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <input id="x5" type="radio" name="x-fmt" style={{ width: '16px', height: '16px', margin: '2px 0 0' }} />
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>CSV</span>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Séparateur point-virgule, UTF-8 avec BOM
                </span>
              </span>
            </label>
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
            <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontWeight: '600' }}>Aperçu : 6 lignes</span>
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                Cet export contient des valeurs en FCFA : à ne partager qu'avec les personnes autorisées.
              </span>
            </div>
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
              onClick={v.toastOn}
            >
              <Icon name="download" size={16} />
              Générer
            </button>
          </div>
        </main>
      </div>
      {v.toast && (
        <>
          <div
            role="status"
            style={{
              position: 'absolute',
              top: '84px',
              right: '28px',
              width: '400px',
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
              Export enregistré : export-mouvements-20261114-1015.xlsx
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
  );
}
