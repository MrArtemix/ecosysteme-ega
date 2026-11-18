import type React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Terrain, Retour chantier — maquette « Terrain-Retour.dc.html ». */
export default function TerrainRetour() {
  useDocumentTitle('EGA Terrain, Retour chantier');
  const v = useScreenState({ rt: 35 }, (s, set) => {
    const r = {} as Record<string, any>;
    r.rt = s.rt;
    r.rtInc = () => set({ rt: Math.min(100, s.rt + 1) });
    r.rtDec = () => set({ rt: Math.max(1, s.rt - 1) });
    r.rtSet = (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseFloat(String(e.target.value).replace(',', '.'));
      set({ rt: isNaN(n) ? 1 : Math.max(1, Math.min(100, n)) });
    };
    r.rtpct = 100 - s.rt;
    r.rtcap = 100 - s.rt + ' m utilisés sur le rouleau de 100 m livré.';
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
              to="/terrain/accueil"
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
                Retour chantier
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
            <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Câble R2V 3G2.5</span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
                fontSize: '26px',
                fontWeight: '700',
                lineHeight: '1.15',
              }}
            >
              {v.rt} m à restituer
            </span>
          </span>
          <div aria-hidden="true" style={{ height: '8px', borderRadius: '6px', background: 'rgba(255,255,255,0.16)' }}>
            <div
              style={{ width: '{{ rtpct }}%', height: '8px', borderRadius: '6px', background: 'var(--color-accent)' }}
            ></div>
          </div>
          <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>{v.rtcap}</span>
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
              <span style={{ fontWeight: '600' }}>Câble R2V 3G2.5</span>
              <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Livré : 100 m</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={v.rtDec}
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
              <label htmlFor="rt1" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}>
                Quantité restituée
              </label>
              <input
                id="rt1"
                type="text"
                inputMode="decimal"
                value={v.rt}
                onChange={v.rtSet}
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
                onClick={v.rtInc}
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
                m
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="rt-motif" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Motif du retour
            </label>
            <select
              id="rt-motif"
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
              <option>Matériel non utilisé</option>
              <option>Matériel endommagé</option>
              <option>Erreur de livraison</option>
              <option>Autre</option>
            </select>
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
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Photo (facultatif)</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Aucune photo</span>
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
                <Icon name="camera" />
                Prendre une photo
              </button>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              padding: '12px 16px',
              borderRadius: '10px',
              background: 'var(--color-neutral-bg)',
              fontSize: '14px',
            }}
          >
            <Icon name="info" />
            <span>Le stock du dépôt est mis à jour quand le magasinier valide le retour.</span>
          </div>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <Link
            to="/terrain/file"
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
            Envoyer le retour
          </Link>
        </div>
      </div>
    </div>
  );
}
