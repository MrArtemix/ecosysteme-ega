import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Central, Tableau de bord — maquette « Central-TableauDeBord.dc.html ». */
export default function CentralTableauDeBord() {
  useDocumentTitle('EGA Central, Tableau de bord');
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
      <CentralSidebar active="/central/tableau-de-bord" role="magasinier" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Tableau de bord" title="Tableau de bord" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <div
              style={{
                flex: '1 1 220px',
                minWidth: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 18px',
                background: 'var(--color-surface)',
                borderRadius: '10px',
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
                  background: 'var(--color-warning-bg)',
                  color: 'var(--color-warning-text)',
                }}
              >
                <Icon name="arrowUp" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Sorties à préparer
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '1.15',
                    whiteSpace: 'nowrap',
                  }}
                >
                  2
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  la plus ancienne depuis 09:20
                </span>
              </span>
            </div>
            <div
              style={{
                flex: '1 1 220px',
                minWidth: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 18px',
                background: 'var(--color-surface)',
                borderRadius: '10px',
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
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                }}
              >
                <Icon name="arrowDown" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Entrées du jour
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '1.15',
                    whiteSpace: 'nowrap',
                  }}
                >
                  1
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>200 m de câble</span>
              </span>
            </div>
            <div
              style={{
                flex: '1 1 220px',
                minWidth: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 18px',
                background: 'var(--color-surface)',
                borderRadius: '10px',
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
                  background: 'var(--color-danger-bg)',
                  color: 'var(--color-danger-text)',
                }}
              >
                <Icon name="alert" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Produits sous seuil
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '1.15',
                    whiteSpace: 'nowrap',
                  }}
                >
                  1
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Disjoncteur 20 A</span>
              </span>
            </div>
            <div
              style={{
                flex: '1 1 220px',
                minWidth: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 18px',
                background: 'var(--color-surface)',
                borderRadius: '10px',
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
                <Icon name="refresh" />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
                  Retours à valider
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '1.15',
                    whiteSpace: 'nowrap',
                  }}
                >
                  1
                </span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>35 m de câble annoncés</span>
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <section
              style={{ flex: '1 1 460px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '17px',
                    fontWeight: '600',
                  }}
                >
                  Sorties à préparer
                </h2>
                <span
                  style={{
                    padding: '2px 10px',
                    borderRadius: '16px',
                    background: 'var(--color-primary)',
                    color: 'var(--color-on-primary)',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}
                >
                  2
                </span>
              </div>
              <div
                style={{
                  overflowX: 'auto',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <table style={{ width: '100%', minWidth: '420px', borderCollapse: 'collapse' }}>
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
                        Référence
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
                        Chantier
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
                        Lignes
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
                        Validée depuis
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <Link
                          to="/central/preparation"
                          style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}
                        >
                          BS-2026-0042
                        </Link>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Chantier Marcory
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
                        3
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        09:20
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <Link
                          to="/central/preparation"
                          style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}
                        >
                          BS-2026-0045
                        </Link>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Chantier Riviera 4
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
                        1
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        09:48
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section
              style={{ flex: '1 1 460px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '17px',
                    fontWeight: '600',
                  }}
                >
                  Entrées du jour
                </h2>
                <span
                  style={{
                    padding: '2px 10px',
                    borderRadius: '16px',
                    background: 'var(--color-primary)',
                    color: 'var(--color-on-primary)',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}
                >
                  1
                </span>
              </div>
              <div
                style={{
                  overflowX: 'auto',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <table style={{ width: '100%', minWidth: '420px', borderCollapse: 'collapse' }}>
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
                        Référence
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
                        Fournisseur
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
                        Lignes
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
                        Heure
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <Link
                          to="/central/mouvement"
                          style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}
                        >
                          BE-2026-0118
                        </Link>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Fournisseur Test
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
                        1
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        09:02
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section
              style={{ flex: '1 1 460px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '17px',
                    fontWeight: '600',
                  }}
                >
                  Produits sous seuil
                </h2>
                <span
                  style={{
                    padding: '2px 10px',
                    borderRadius: '16px',
                    background: 'var(--color-primary)',
                    color: 'var(--color-on-primary)',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}
                >
                  1
                </span>
              </div>
              <div
                style={{
                  overflowX: 'auto',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <table style={{ width: '100%', minWidth: '420px', borderCollapse: 'collapse' }}>
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
                          textAlign: 'right',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        En stock
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
                        Seuil
                      </th>
                    </tr>
                  </thead>
                  <tbody>
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
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        18 pce
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
                        20 pce
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section
              style={{ flex: '1 1 460px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '17px',
                    fontWeight: '600',
                  }}
                >
                  Retours à valider
                </h2>
                <span
                  style={{
                    padding: '2px 10px',
                    borderRadius: '16px',
                    background: 'var(--color-primary)',
                    color: 'var(--color-on-primary)',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}
                >
                  1
                </span>
              </div>
              <div
                style={{
                  overflowX: 'auto',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <table style={{ width: '100%', minWidth: '520px', borderCollapse: 'collapse' }}>
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
                        Chantier
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
                          textAlign: 'right',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-background)',
                          borderBottom: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Déclaré
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
                        Annoncé par
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Chantier Marcory
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Câble R2V 3G2.5
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
                        35 m
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        agent1.test
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section
              style={{
                flex: '1 1 460px',
                minWidth: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
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
                Aujourd'hui au dépôt
              </h2>
              <ol style={{ margin: '0', padding: '0', listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    11:20
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-danger-bg)',
                        color: 'var(--color-danger-text)',
                      }}
                    >
                      <Icon name="alert" size={16} />
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ flex: '1', width: '2px', minHeight: '10px', background: 'var(--color-divider)' }}
                    ></span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Réception avec écart</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BS-2026-0042, 36 pce reçues sur 40, agent1.test
                    </span>
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    10:10
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-success-bg)',
                        color: 'var(--color-success-text)',
                      }}
                    >
                      <Icon name="check" size={16} />
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ flex: '1', width: '2px', minHeight: '10px', background: 'var(--color-divider)' }}
                    ></span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Sortie validée</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BS-2026-0043, Chantier Riviera 4, mag1.test
                    </span>
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    10:05
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-warning-bg)',
                        color: 'var(--color-warning-text)',
                      }}
                    >
                      <Icon name="truck" size={16} />
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ flex: '1', width: '2px', minHeight: '10px', background: 'var(--color-divider)' }}
                    ></span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Expédition</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BS-2026-0042 vers Chantier Marcory, mag1.test
                    </span>
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    09:12
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-neutral-bg)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <Icon name="arrowUp" size={16} />
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ flex: '1', width: '2px', minHeight: '10px', background: 'var(--color-divider)' }}
                    ></span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Demande reçue du terrain</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BS-2026-0042, agent1.test
                    </span>
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span
                    style={{
                      width: '40px',
                      flex: 'none',
                      paddingTop: '7px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    09:02
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        flex: 'none',
                        borderRadius: '10px',
                        background: 'var(--color-success-bg)',
                        color: 'var(--color-success-text)',
                      }}
                    >
                      <Icon name="arrowDown" size={16} />
                    </span>
                  </span>
                  <span
                    style={{
                      flex: '1',
                      minWidth: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      padding: '5px 0 14px',
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>Entrée confirmée</span>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      BE-2026-0118, 200 m de câble, mag1.test
                    </span>
                  </span>
                </li>
              </ol>
            </section>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link
              to="/central/sortie"
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
                background: 'var(--color-accent)',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-accent)',
                boxShadow: 'var(--shadow-accent)',
              }}
            >
              <Icon name="plus" size={16} />
              Nouvelle sortie (F3)
            </Link>
            <Link
              to="/central/entree"
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
              <Icon name="plus" size={16} />
              Nouvelle entrée (F2)
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
