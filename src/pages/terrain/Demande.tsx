import type React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useScreenState } from '../../hooks/useScreenState';

/** EGA Terrain, Nouvelle demande — maquette « Terrain-Demande.dc.html ». */
export default function TerrainDemande() {
  useDocumentTitle('EGA Terrain, Nouvelle demande');
  const v = useScreenState({ n1: 10, n2: 250 }, (s, set) => {
    const r = {} as Record<string, any>;
    r.n1 = s.n1;
    r.n1Inc = () => set({ n1: Math.min(9999, s.n1 + 1) });
    r.n1Dec = () => set({ n1: Math.max(1, s.n1 - 1) });
    r.n1Set = (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseFloat(String(e.target.value).replace(',', '.'));
      set({ n1: isNaN(n) ? 1 : Math.max(1, Math.min(9999, n)) });
    };
    r.n2 = s.n2;
    r.n2Inc = () => set({ n2: Math.min(99990, s.n2 + 10) });
    r.n2Dec = () => set({ n2: Math.max(10, s.n2 - 10) });
    r.n2Set = (e: React.ChangeEvent<HTMLInputElement>) => {
      const n = parseFloat(String(e.target.value).replace(',', '.'));
      set({ n2: isNaN(n) ? 10 : Math.max(10, Math.min(99990, n)) });
    };
    const ro = Math.floor(s.n2 / 100),
      re = s.n2 % 100;
    r.n2conv =
      ro === 0
        ? "moins d'un rouleau"
        : 'soit ' + ro + (ro > 1 ? ' rouleaux' : ' rouleau') + (re ? ' et ' + re + ' m' : '');
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
              to="/terrain/demande-articles"
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
                Nouvelle demande
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '4px 16px 20px',
            color: 'var(--color-on-primary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '20px',
                fontWeight: '700',
              }}
            >
              Quantités
            </span>
            <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Étape 3 sur 4</span>
          </div>
          <div
            aria-hidden="true"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '6px' }}
          >
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'rgba(255,255,255,0.18)' }}></div>
          </div>
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
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Disjoncteur 20 A</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>PRD-005</span>
              </span>
              <button
                type="button"
                aria-label="Retirer Disjoncteur 20 A"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  margin: '-12px -12px 0 0',
                  background: 'transparent',
                  border: '0',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                }}
              >
                <Icon name="close" />
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={v.n1Dec}
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
              <label htmlFor="n1" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}>
                Quantité de Disjoncteur 20 A
              </label>
              <input
                id="n1"
                type="text"
                inputMode="decimal"
                value={v.n1}
                onChange={v.n1Set}
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
                onClick={v.n1Inc}
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
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: '600' }}>Câble R2V 3G2.5</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>PRD-001</span>
              </span>
              <button
                type="button"
                aria-label="Retirer Câble R2V 3G2.5"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  margin: '-12px -12px 0 0',
                  background: 'transparent',
                  border: '0',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                }}
              >
                <Icon name="close" />
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={v.n2Dec}
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
              <label htmlFor="n2" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden' }}>
                Quantité de Câble R2V 3G2.5
              </label>
              <input
                id="n2"
                type="text"
                inputMode="decimal"
                value={v.n2}
                onChange={v.n2Set}
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
                onClick={v.n2Inc}
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
            <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{v.n2conv}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="n-note" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>
              Remarque (facultatif)
            </label>
            <textarea
              id="n-note"
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
              defaultValue="Livraison avant vendredi si possible."
            />
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
            <span>Hors-ligne : la demande sera enregistrée sur le téléphone et envoyée dès que le réseau revient.</span>
          </div>
        </main>
        <div style={{ padding: '12px 16px 16px', background: 'var(--color-background)' }}>
          <Link
            to="/terrain/demande-recap"
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
            Voir le récapitulatif
          </Link>
        </div>
      </div>
    </div>
  );
}
