import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Central, Catalogue — maquette « Central-Catalogue.dc.html ». */
export default function CentralCatalogue() {
  useDocumentTitle('EGA Central, Catalogue');
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
      <CentralSidebar active="/central/catalogue" role="admin" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Catalogue" title="Catalogue" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ flex: '999 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '12px' }}>
                <div style={{ flex: '1 1 240px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="k-q"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Recherche
                  </label>
                  <input
                    id="k-q"
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
                <div style={{ flex: '1 1 180px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="k-cat"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Catégorie
                  </label>
                  <select
                    id="k-cat"
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
                  <Icon name="plus" size={16} />
                  Nouveau produit
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
                <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse' }}>
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
                          textAlign: 'left',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Catégorie
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
                        Unité
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
                        Coût unitaire
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
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          PRD-001
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Câble R2V 3G2.5
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Câbles
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        m
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
                        1 800 FCFA
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                          <Icon name="check" size={14} />
                          Actif
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          PRD-002
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Gaine ICTA Ø20
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Gaines
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        pce
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
                        3 000 FCFA
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                          <Icon name="check" size={14} />
                          Actif
                        </span>
                      </td>
                    </tr>
                    <tr style={{ background: 'var(--color-neutral-bg)' }}>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          PRD-003
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Onduleur 5 kVA
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Énergie/Solaire
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        pce
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
                        800 000 FCFA
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                          <Icon name="check" size={14} />
                          Actif
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          PRD-004
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Climatiseur Split 2 CV
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Climatisation
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        pce
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
                        425 000 FCFA
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                          <Icon name="check" size={14} />
                          Actif
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                          PRD-005
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Disjoncteur 20 A
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Énergie/Solaire
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        pce
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
                        4 500 FCFA
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
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
                          <Icon name="check" size={14} />
                          Actif
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <aside style={{ flex: '1 1 320px', minWidth: '0' }}>
              <section
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
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
                  Fiche produit
                </h2>
                <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="k-sku"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    SKU
                  </label>
                  <input
                    id="k-sku"
                    type="text"
                    defaultValue="PRD-003"
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
                <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="k-nom"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Nom
                  </label>
                  <input
                    id="k-nom"
                    type="text"
                    defaultValue="Onduleur 5 kVA"
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
                <div style={{ flex: '1 1 auto', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="k-c2"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Catégorie
                  </label>
                  <select
                    id="k-c2"
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
                    <option>Énergie/Solaire</option>
                  </select>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div
                    style={{ flex: '1 1 100px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}
                  >
                    <label
                      htmlFor="k-u"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Unité de base
                    </label>
                    <select
                      id="k-u"
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
                      <option>pce</option>
                    </select>
                  </div>
                  <div
                    style={{ flex: '1 1 100px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}
                  >
                    <label
                      htmlFor="k-pack"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Conditionnement
                    </label>
                    <input
                      id="k-pack"
                      type="text"
                      defaultValue="1"
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
                </div>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" defaultChecked style={{ width: '16px', height: '16px' }} />
                  Numéro de série requis
                </label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div
                    style={{ flex: '1 1 100px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}
                  >
                    <label
                      htmlFor="k-cost"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Coût unitaire (FCFA)
                    </label>
                    <input
                      id="k-cost"
                      type="text"
                      defaultValue="800 000"
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
                  <div
                    style={{ flex: '1 1 100px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}
                  >
                    <label
                      htmlFor="k-min"
                      style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                    >
                      Seuil minimal
                    </label>
                    <input
                      id="k-min"
                      type="text"
                      defaultValue="1"
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
                </div>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Les mouvements existants gardent leur coût. Une modification de coût est tracée et signalée à la
                  direction.
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '12px' }}>
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
                      background: 'transparent',
                      color: 'var(--color-accent-text)',
                      border: '1px solid transparent',
                    }}
                  >
                    Désactiver
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
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      border: '1px solid var(--color-text-muted)',
                    }}
                    onClick={v.toastOn}
                  >
                    Enregistrer
                  </button>
                </div>
              </section>
            </aside>
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
              Fiche produit enregistrée. Les mouvements existants gardent leur coût.
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
