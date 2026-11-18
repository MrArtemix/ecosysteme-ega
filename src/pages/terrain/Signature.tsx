import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Terrain, Signature — maquette « Terrain-Signature.dc.html ». */
export default function TerrainSignature() {
  useDocumentTitle('EGA Terrain, Signature');
  const v = useScreenState({ cleared: false }, (s, set) => {
    const r = {} as Record<string, any>;
    r.cleared = !!s.cleared;
    r.clearedNot = !s.cleared;
    r.clearedOn = () => set({ cleared: true });
    r.clearedOff = () => set({ cleared: false });
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
              to="/terrain/reception"
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
                Signature
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
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: '500' }}>
                  BS-2026-0042
                </span>
                , Chantier Marcory
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
            {v.clearedNot && (
              <>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '440px',
                    border: '2px solid var(--color-text-muted)',
                    borderRadius: '16px',
                    background: 'var(--color-surface)',
                  }}
                >
                  <svg
                    width="320"
                    height="160"
                    viewBox="0 0 200 100"
                    fill="none"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    role="img"
                    aria-label="Signature tracée"
                  >
                    <path d="M8 70c14-48 22-50 26-22s10 30 20 2 14-32 20-10 12 28 24 8 22-30 34-16 24 12 40-10 14-12 20-4" />
                  </svg>
                </div>
              </>
            )}
            {v.cleared && (
              <>
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    width: '100%',
                    height: '440px',
                    border: '2px dashed var(--color-text-muted)',
                    borderRadius: '16px',
                    background: 'var(--color-surface)',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'inherit',
                    fontSize: '16px',
                    cursor: 'pointer',
                  }}
                  onClick={v.clearedOff}
                >
                  <Icon name="pencil" size={28} />
                  Touchez ici pour signer avec le doigt
                </button>
              </>
            )}
          </div>
          <p style={{ margin: '0', fontSize: '14px', color: 'var(--color-text-muted)' }}>
            Signature du chef de chantier, au doigt. Elle sert de preuve de réception du matériel.
          </p>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <div>
            {v.clearedNot && (
              <>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="button"
                    style={{
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
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      border: '1px solid var(--color-text-muted)',
                    }}
                    onClick={v.clearedOn}
                  >
                    Effacer
                  </button>
                  <div style={{ flex: '1' }}>
                    <Link
                      to="/terrain/reception"
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
                      Valider la signature
                    </Link>
                  </div>
                </div>
              </>
            )}
            {v.cleared && (
              <>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="button"
                    disabled
                    style={{
                      minHeight: '56px',
                      padding: '0 16px',
                      borderRadius: '10px',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text-muted)',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      fontWeight: '600',
                    }}
                  >
                    Effacer
                  </button>
                  <div style={{ flex: '1' }}>
                    <button
                      type="button"
                      disabled
                      style={{
                        width: '100%',
                        minHeight: '56px',
                        borderRadius: '10px',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-neutral-bg)',
                        color: 'var(--color-text-muted)',
                        fontFamily: 'inherit',
                        fontSize: '16px',
                        fontWeight: '600',
                      }}
                    >
                      Valider la signature
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
