import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Direction, Détail d'un mouvement — maquette « Direction-Mouvement.dc.html ». */
export default function DirectionMouvement() {
  useDocumentTitle("EGA Direction, Détail d'un mouvement");
  const v = useScreenState({ dlg: false }, (s, set) => {
    const r = {} as Record<string, any>;
    r.dlg = !!s.dlg;
    r.dlgNot = !s.dlg;
    r.dlgOn = () => set({ dlg: true });
    r.dlgOff = () => set({ dlg: false });
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
              to="/direction/alertes"
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
                Mouvement
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
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '500' }}>
                  BS-2026-0042
                </span>
                , vers Chantier Marcory
              </span>
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
          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Quantité reçue sur site</span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                fontSize: '26px',
                fontWeight: '700',
                lineHeight: '1.15',
              }}
            >
              36 sur 40 pce
            </span>
          </span>
          <div aria-hidden="true" style={{ height: '8px', borderRadius: '6px', background: 'rgba(255,255,255,0.16)' }}>
            <div style={{ width: '90%', height: '8px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
          </div>
          <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>
            Écart de 4 pce. Motif déclaré : Manquant.
          </span>
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
          <div style={{ display: 'flex' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 10px 3px 8px',
                borderRadius: '16px',
                background: 'var(--color-danger-bg)',
                color: 'var(--color-danger-text)',
                fontSize: '13px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
              }}
            >
              <Icon name="alert" size={14} />
              Terminé avec écart
            </span>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
              <span style={{ fontWeight: '600' }}>Gaine ICTA Ø20</span>
              <span style={{ fontWeight: '600', whiteSpace: 'nowrap' }}>120 000 FCFA</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Demandé</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>40 pce</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Reçu</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>36 pce</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-danger-text)' }}>
              <Icon name="alert" size={18} />
              <span>Écart de 4 pce. Motif : Manquant.</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
            <div
              role="img"
              aria-label="Photo du déchargement"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                height: '120px',
                borderRadius: '10px',
                background: 'var(--color-neutral-bg)',
                color: 'var(--color-text-muted)',
                fontSize: '14px',
              }}
            >
              <Icon name="camera" size={24} />
              <span>Photo</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                height: '120px',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
                background: 'var(--color-surface)',
                overflow: 'hidden',
              }}
            >
              <svg
                width="150"
                height="56"
                viewBox="0 0 200 56"
                fill="none"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="Signature du chef de chantier"
              >
                <path d="M8 40c14-28 22-30 26-12s10 20 20 2 14-22 20-6 12 18 24 4 22-20 34-10 24 8 40-6 14-8 20-2" />
              </svg>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Signature</span>
            </div>
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
                  En transit
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
                  <span style={{ flex: '1', height: '2px', background: 'transparent' }}></span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
                  Reçu
                </span>
              </li>
            </ol>
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
              minHeight: '48px',
              padding: '0 16px',
              borderRadius: '10px',
              fontFamily: 'inherit',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-text-muted)',
            }}
            onClick={v.dlgOn}
          >
            <Icon name="check" />
            Marquer l'alerte comme traitée
          </button>
        </div>
        {v.dlg && (
          <>
            <div
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '390px',
                height: '844px',
                display: 'flex',
                alignItems: 'flex-end',
                background: 'rgba(15,41,66,0.55)',
              }}
            >
              <div
                role="dialog"
                aria-label="Marquer l'alerte comme traitée ?"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '24px 16px 20px',
                  background: 'var(--color-surface)',
                  borderRadius: '16px 16px 0 0',
                }}
              >
                <h2
                  style={{
                    margin: '0',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'var(--color-primary)',
                  }}
                >
                  Marquer l'alerte comme traitée ?
                </h2>
                <p style={{ margin: '0', fontSize: '14px', color: 'var(--color-text-muted)' }}>
                  Écart de livraison sur{' '}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '500' }}>
                    BS-2026-0042
                  </span>
                  . L'alerte reste consultable dans la liste Toutes.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="dm-com"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Commentaire (facultatif)
                  </label>
                  <textarea
                    id="dm-com"
                    rows={2}
                    style={{
                      boxSizing: 'border-box',
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '6px',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      resize: 'none',
                    }}
                    defaultValue=""
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link
                    to="/direction/alertes"
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
                    <Icon name="check" />
                    Confirmer
                  </Link>
                  <button
                    type="button"
                    style={{
                      width: '100%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      minHeight: '48px',
                      padding: '0 16px',
                      borderRadius: '10px',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      border: '1px solid var(--color-text-muted)',
                    }}
                    onClick={v.dlgOff}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
