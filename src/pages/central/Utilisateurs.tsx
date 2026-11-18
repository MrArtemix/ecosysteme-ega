import { Link } from 'react-router-dom';
import { CentralSidebar } from '../../components/CentralSidebar';
import { CentralTopbar } from '../../components/CentralTopbar';
import { Icon } from '../../components/Icon';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Central, Utilisateurs — maquette « Central-Utilisateurs.dc.html ». */
export default function CentralUtilisateurs() {
  useDocumentTitle('EGA Central, Utilisateurs');
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
      <CentralSidebar active="/central/utilisateurs" role="admin" />
      <div style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
        <CentralTopbar breadcrumb="Utilisateurs" title="Utilisateurs" />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px 28px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ flex: '999 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '12px' }}>
                <div style={{ flex: '1 1 240px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="u-q"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Recherche
                  </label>
                  <input
                    id="u-q"
                    type="text"
                    placeholder="Nom ou identifiant"
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
                    htmlFor="u-role"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Rôle
                  </label>
                  <select
                    id="u-role"
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
                    <option>Tous les rôles</option>
                  </select>
                </div>
                <div style={{ flex: '1 1 0' }}></div>
                <Link
                  to="/central/nouvel-utilisateur"
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
                  Nouvel utilisateur
                </Link>
              </div>
              <div
                style={{
                  overflowX: 'auto',
                  background: 'var(--color-surface)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <table style={{ width: '100%', minWidth: '760px', borderCollapse: 'collapse' }}>
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
                        Identifiant
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
                        Fonction
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
                        Rôle
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
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            aria-hidden="true"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: 'var(--color-neutral-bg)',
                              color: 'var(--color-primary)',
                              fontSize: '11px',
                              fontWeight: '700',
                            }}
                          >
                            BO
                          </span>
                          <span style={{ fontWeight: '500' }}>boss.test</span>
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Direction
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
                            background: 'var(--color-neutral-bg)',
                            color: 'var(--color-text-muted)',
                            fontSize: '13px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Icon name="user" size={14} />
                          Direction
                        </span>
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
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            minHeight: '32px',
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
                          Réinitialiser le mot de passe
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            aria-hidden="true"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: 'var(--color-neutral-bg)',
                              color: 'var(--color-primary)',
                              fontSize: '11px',
                              fontWeight: '700',
                            }}
                          >
                            AD
                          </span>
                          <span style={{ fontWeight: '500' }}>admin.test</span>
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Administrateur
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
                            background: 'var(--color-neutral-bg)',
                            color: 'var(--color-text-muted)',
                            fontSize: '13px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Icon name="user" size={14} />
                          Administrateur
                        </span>
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
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            minHeight: '32px',
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
                          Réinitialiser le mot de passe
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            aria-hidden="true"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: 'var(--color-neutral-bg)',
                              color: 'var(--color-primary)',
                              fontSize: '11px',
                              fontWeight: '700',
                            }}
                          >
                            M1
                          </span>
                          <span style={{ fontWeight: '500' }}>mag1.test</span>
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Magasinier
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
                            background: 'var(--color-neutral-bg)',
                            color: 'var(--color-text-muted)',
                            fontSize: '13px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Icon name="user" size={14} />
                          Magasinier
                        </span>
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
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            minHeight: '32px',
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
                          Réinitialiser le mot de passe
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            aria-hidden="true"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: 'var(--color-neutral-bg)',
                              color: 'var(--color-primary)',
                              fontSize: '11px',
                              fontWeight: '700',
                            }}
                          >
                            M2
                          </span>
                          <span style={{ fontWeight: '500' }}>mag2.test</span>
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Magasinier
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
                            background: 'var(--color-neutral-bg)',
                            color: 'var(--color-text-muted)',
                            fontSize: '13px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Icon name="user" size={14} />
                          Magasinier
                        </span>
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
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            minHeight: '32px',
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
                          Réinitialiser le mot de passe
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            aria-hidden="true"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: 'var(--color-neutral-bg)',
                              color: 'var(--color-primary)',
                              fontSize: '11px',
                              fontWeight: '700',
                            }}
                          >
                            A1
                          </span>
                          <span style={{ fontWeight: '500' }}>agent1.test</span>
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Agent terrain
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
                            background: 'var(--color-neutral-bg)',
                            color: 'var(--color-text-muted)',
                            fontSize: '13px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Icon name="user" size={14} />
                          Terrain
                        </span>
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
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            minHeight: '32px',
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
                          Réinitialiser le mot de passe
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            aria-hidden="true"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: 'var(--color-neutral-bg)',
                              color: 'var(--color-primary)',
                              fontSize: '11px',
                              fontWeight: '700',
                            }}
                          >
                            C1
                          </span>
                          <span style={{ fontWeight: '500' }}>chauffeur1.test</span>
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Chauffeur
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
                            background: 'var(--color-neutral-bg)',
                            color: 'var(--color-text-muted)',
                            fontSize: '13px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Icon name="user" size={14} />
                          Terrain
                        </span>
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
                      <td
                        style={{
                          height: '36px',
                          padding: '6px 16px',
                          borderBottom: '1px solid var(--color-divider)',
                          textAlign: 'right',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            minHeight: '32px',
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
                          Réinitialiser le mot de passe
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            aria-hidden="true"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              background: 'var(--color-neutral-bg)',
                              color: 'var(--color-primary)',
                              fontSize: '11px',
                              fontWeight: '700',
                            }}
                          >
                            IN
                          </span>
                          <span style={{ fontWeight: '500' }}>inactif.test</span>
                        </span>
                      </td>
                      <td
                        style={{ height: '36px', padding: '6px 16px', borderBottom: '1px solid var(--color-divider)' }}
                      >
                        Agent terrain
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
                            background: 'var(--color-neutral-bg)',
                            color: 'var(--color-text-muted)',
                            fontSize: '13px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Icon name="user" size={14} />
                          Terrain
                        </span>
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
                            background: 'var(--color-neutral-bg)',
                            color: 'var(--color-text-muted)',
                            fontSize: '13px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Icon name="offline" size={14} />
                          Désactivé
                        </span>
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
                        <button
                          type="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            minHeight: '32px',
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
                          Réinitialiser le mot de passe
                        </button>
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
                  Droits par rôle
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontWeight: '600' }}>Direction (boss)</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    Consulte tout, traite les alertes et règle le seuil d'alerte. Ne bloque aucun mouvement.
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontWeight: '600' }}>Administrateur (office_admin)</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    Gère catalogue, prix, sites, comptes, bons et exports.
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontWeight: '600' }}>Magasinier (storekeeper)</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    Reçoit, prépare et expédie. Ne voit pas les prix.
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontWeight: '600' }}>Terrain (terrain)</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    Demande du matériel et confirme les réceptions. Ne voit aucun prix.
                  </span>
                </div>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  Un utilisateur ne modifie pas son propre rôle. La création d'un compte de direction est réservée à la
                  direction.
                </span>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
