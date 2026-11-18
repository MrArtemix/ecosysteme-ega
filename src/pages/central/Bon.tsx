import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Central, Aperçu du bon de sortie — maquette « Central-Bon.dc.html ». */
export default function CentralBon() {
  useDocumentTitle('EGA Central, Aperçu du bon de sortie');
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
      <CentralSidebar active="/central/mouvements" role="magasinier" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Sorties" title="Aperçu avant impression" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
            <Link
              to="/central/preparation"
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
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-text-muted)',
              }}
            >
              <Icon name="chevronLeft" size={16} />
              Retour à la préparation
            </Link>
            <div style={{ flex: '1 1 0' }}></div>
            <div style={{ flex: '1 1 220px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="bp-i" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                Imprimante
              </label>
              <select
                id="bp-i"
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
                <option>Imprimante du dépôt</option>
              </select>
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
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-text-muted)',
              }}
              onClick={v.toastOn}
            >
              <Icon name="download" size={16} />
              Enregistrer en PDF
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
              onClick={v.toastOn}
            >
              <Icon name="printer" size={16} />
              Imprimer
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0 24px' }}>
            <article
              aria-label="Aperçu du bon de sortie"
              style={{
                width: '100%',
                maxWidth: '760px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                padding: '48px',
                background: 'var(--color-surface)',
                boxShadow: '0 2px 4px rgba(15,41,66,0.08), 0 16px 48px rgba(15,41,66,0.14)',
                fontSize: '13px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Logo size={44} radius={16} fontSize={15} tone="primary" />
                  <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.3' }}>
                    <span style={{ fontSize: '15px', fontWeight: '700' }}>Énergies et Gaines d'Afrique</span>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                      [ADRESSE ET COORDONNÉES D'EGA]
                    </span>
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '-0.01em',
                      fontSize: '22px',
                      fontWeight: '700',
                      color: 'var(--color-primary)',
                    }}
                  >
                    Bon de sortie
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: '600' }}>
                    BS-2026-0042
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>14/11/2026</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    padding: '12px',
                    borderRadius: '6px',
                    background: 'var(--color-background)',
                  }}
                >
                  <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--color-text-muted)' }}>
                    Dépôt d'origine
                  </span>
                  <span style={{ fontWeight: '600' }}>Dépôt Principal EGA</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    padding: '12px',
                    borderRadius: '6px',
                    background: 'var(--color-background)',
                  }}
                >
                  <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--color-text-muted)' }}>
                    Chantier destinataire
                  </span>
                  <span style={{ fontWeight: '600' }}>Chantier Marcory</span>
                </div>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{
                        padding: '8px 12px',
                        textAlign: 'left',
                        fontSize: '11px',
                        fontWeight: '600',
                        color: 'var(--color-text-muted)',
                        borderBottom: '2px solid var(--color-primary)',
                      }}
                    >
                      SKU
                    </th>
                    <th
                      scope="col"
                      style={{
                        padding: '8px 12px',
                        textAlign: 'left',
                        fontSize: '11px',
                        fontWeight: '600',
                        color: 'var(--color-text-muted)',
                        borderBottom: '2px solid var(--color-primary)',
                      }}
                    >
                      Désignation
                    </th>
                    <th
                      scope="col"
                      style={{
                        padding: '8px 12px',
                        textAlign: 'left',
                        fontSize: '11px',
                        fontWeight: '600',
                        color: 'var(--color-text-muted)',
                        borderBottom: '2px solid var(--color-primary)',
                      }}
                    >
                      Unité
                    </th>
                    <th
                      scope="col"
                      style={{
                        padding: '8px 12px',
                        textAlign: 'right',
                        fontSize: '11px',
                        fontWeight: '600',
                        color: 'var(--color-text-muted)',
                        borderBottom: '2px solid var(--color-primary)',
                      }}
                    >
                      Quantité
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: '10px 12px',
                        borderBottom: '1px solid var(--color-border)',
                        fontSize: '13px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      PRD-002
                    </td>
                    <td
                      style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border)', fontSize: '13px' }}
                    >
                      Gaine ICTA Ø20
                    </td>
                    <td
                      style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border)', fontSize: '13px' }}
                    >
                      pce
                    </td>
                    <td
                      style={{
                        padding: '10px 12px',
                        borderBottom: '1px solid var(--color-border)',
                        fontSize: '13px',
                        textAlign: 'right',
                        fontWeight: '600',
                      }}
                    >
                      40
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: '10px 12px',
                        borderBottom: '1px solid var(--color-border)',
                        fontSize: '13px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      PRD-001
                    </td>
                    <td
                      style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border)', fontSize: '13px' }}
                    >
                      Câble R2V 3G2.5
                    </td>
                    <td
                      style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border)', fontSize: '13px' }}
                    >
                      m
                    </td>
                    <td
                      style={{
                        padding: '10px 12px',
                        borderBottom: '1px solid var(--color-border)',
                        fontSize: '13px',
                        textAlign: 'right',
                        fontWeight: '600',
                      }}
                    >
                      200
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: '10px 12px',
                        borderBottom: '1px solid var(--color-border)',
                        fontSize: '13px',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      PRD-003
                    </td>
                    <td
                      style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border)', fontSize: '13px' }}
                    >
                      Onduleur 5 kVA, série SN-OND-001
                    </td>
                    <td
                      style={{ padding: '10px 12px', borderBottom: '1px solid var(--color-border)', fontSize: '13px' }}
                    >
                      pce
                    </td>
                    <td
                      style={{
                        padding: '10px 12px',
                        borderBottom: '1px solid var(--color-border)',
                        fontSize: '13px',
                        textAlign: 'right',
                        fontWeight: '600',
                      }}
                    >
                      1
                    </td>
                  </tr>
                </tbody>
              </table>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                Préparé par mag1.test le 14/11/2026 à 10:05. Sortie partielle : 200 m de câble sur 250 m, 1 onduleur sur
                2.
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600' }}>Magasinier</span>
                  <div style={{ height: '72px', border: '1px solid var(--color-border)', borderRadius: '6px' }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Nom, date et signature</span>
                </div>
                <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600' }}>Chauffeur</span>
                  <div style={{ height: '72px', border: '1px solid var(--color-border)', borderRadius: '6px' }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Nom, date et signature</span>
                </div>
                <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600' }}>Réceptionnaire</span>
                  <div style={{ height: '72px', border: '1px solid var(--color-border)', borderRadius: '6px' }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Nom, date et signature</span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '8px',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--color-border)',
                  fontSize: '11px',
                  color: 'var(--color-text-muted)',
                }}
              >
                <span>Document sans prix, version magasinier</span>
                <span>Page 1 sur 1</span>
              </div>
            </article>
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
              Bon BS-2026-0042 envoyé à l'imprimante du dépôt. Une réimpression portera la mention Duplicata.
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
