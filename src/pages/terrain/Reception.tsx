import type React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Terrain, Réception — maquette « Terrain-Reception.dc.html ». */
export default function TerrainReception() {
  useDocumentTitle('EGA Terrain, Réception');
  const v = useScreenState({ r1: 36 }, (s, set) => {
    const r = {} as Record<string, any>;
    r.r1 = s.r1;
    r.r1Inc = () => set({ r1: Math.min(40, s.r1 + 1) });
    r.r1Dec = () => set({ r1: Math.max(0, s.r1 - 1) });
    r.r1Set = (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseFloat(String(e.target.value).replace(',', '.'));
      set({ r1: isNaN(n) ? 0 : Math.max(0, Math.min(40, n)) });
    };
    r.r1pct = Math.round((s.r1 / 40) * 100);
    r.r1ecart = s.r1 < 40;
    r.r1cap =
      s.r1 < 40
        ? 'Écart de ' + (40 - s.r1) + ' pce sur 1 article : un motif est demandé.'
        : 'Quantité conforme à la demande.';
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
              to="/terrain/bon"
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
                Réception
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
                  background: 'var(--color-success-bg)',
                  color: 'var(--color-success-text)',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                <Icon name="check" size={14} />
                En ligne
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
          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Quantité reçue</span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                fontSize: '26px',
                fontWeight: '700',
                lineHeight: '1.15',
              }}
            >
              {v.r1} sur 40 pce
            </span>
          </span>
          <div aria-hidden="true" style={{ height: '8px', borderRadius: '6px', background: 'rgba(255,255,255,0.16)' }}>
            <div
              style={{ width: '{{ r1pct }}%', height: '8px', borderRadius: '6px', background: 'var(--color-accent)' }}
            ></div>
          </div>
          <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>{v.r1cap}</span>
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
              flexDirection: 'column',
              gap: '8px',
              padding: '16px',
              background: 'var(--color-surface)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <span style={{ fontWeight: '600' }}>Gaine ICTA Ø20</span>
              <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Demandé : 40 pce</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={v.r1Dec}
                aria-label="Diminuer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-text-muted)',
                  cursor: 'pointer',
                }}
              >
                <Icon name="minus" />
              </button>
              <label htmlFor="r1" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}>
                Quantité reçue
              </label>
              <input
                id="r1"
                type="text"
                inputMode="decimal"
                value={v.r1}
                onChange={v.r1Set}
                style={{
                  boxSizing: 'border-box',
                  width: '96px',
                  height: '48px',
                  padding: '0 12px',
                  textAlign: 'right',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '20px',
                  fontWeight: '600',
                }}
              />
              <button
                type="button"
                onClick={v.r1Inc}
                aria-label="Augmenter"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-text-muted)',
                  cursor: 'pointer',
                }}
              >
                <Icon name="plus" />
              </button>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '20px',
                  fontWeight: '600',
                }}
              >
                pce
              </span>
            </div>
            {v.r1ecart && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label
                    htmlFor="r-motif"
                    style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}
                  >
                    Motif de l'écart (obligatoire)
                  </label>
                  <select
                    id="r-motif"
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
                    <option>Manquant</option>
                    <option>Endommagé</option>
                    <option>Erreur de livraison</option>
                    <option>Autre</option>
                  </select>
                </div>
              </>
            )}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                role="img"
                aria-label="Aperçu de la photo du déchargement"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '72px',
                  height: '56px',
                  flex: 'none',
                  borderRadius: '6px',
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <Icon name="camera" size={24} />
              </div>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Photo du déchargement</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>1 photo, 480 Ko</span>
              </span>
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minHeight: '48px',
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
                Reprendre
              </button>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <span style={{ fontWeight: '600' }}>Signature du chef de chantier</span>
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minHeight: '48px',
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
                Effacer
              </button>
            </div>
            <Link
              to="/terrain/signature"
              aria-label="Ouvrir la signature en plein écran"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '72px',
                border: '2px solid var(--color-text-muted)',
                borderRadius: '10px',
                background: 'var(--color-surface)',
              }}
            >
              <svg
                width="200"
                height="56"
                viewBox="0 0 200 56"
                fill="none"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="Signature tracée"
              >
                <path d="M8 40c14-28 22-30 26-12s10 20 20 2 14-22 20-6 12 18 24 4 22-20 34-10 24 8 40-6 14-8 20-2" />
              </svg>
            </Link>
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
              La signature et la photo servent de preuve de réception.
            </span>
          </div>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <Link
            to="/terrain/reception-ok"
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
            Valider la réception
          </Link>
        </div>
      </div>
    </div>
  );
}
