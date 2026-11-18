import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Logo } from '../../components/Logo';
import { Pattern } from '../../components/Pattern';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

/** EGA Terrain, Nouvelle demande, récapitulatif — maquette « Terrain-Demande-Recap.dc.html ». */
export default function TerrainDemandeRecap() {
  useDocumentTitle('EGA Terrain, Nouvelle demande, récapitulatif');
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
              to="/terrain/demande"
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
              Récapitulatif
            </span>
            <span style={{ fontSize: '12px', color: 'var(--color-on-primary-muted)' }}>Étape 4 sur 4</span>
          </div>
          <div
            aria-hidden="true"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '6px' }}
          >
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
            <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-accent)' }}></div>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Chantier</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>Chantier Marcory</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Demandeur</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>agent1.test</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Date</span>
              <span style={{ textAlign: 'right', fontWeight: '500' }}>14/11/2026 à 08:40</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <h2
              style={{
                margin: '0',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
                fontSize: '17px',
                fontWeight: '600',
              }}
            >
              2 articles
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--color-surface)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <Icon name="box" size={16} />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>Disjoncteur 20 A</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>PRD-005</span>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '18px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                }}
              >
                10 pce
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                minHeight: '52px',
                padding: '8px 16px',
                borderBottom: '1px solid var(--color-divider)',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  flex: 'none',
                  borderRadius: '10px',
                  background: 'var(--color-neutral-bg)',
                  color: 'var(--color-text-muted)',
                }}
              >
                <Icon name="box" size={16} />
              </span>
              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                <span style={{ fontWeight: '500' }}>Câble R2V 3G2.5</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  PRD-001, soit 2 rouleaux et 50 m
                </span>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.01em',
                  fontSize: '18px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                }}
              >
                250 m
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
            <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--color-text-muted)' }}>Remarque</span>
            <span>Livraison avant vendredi si possible.</span>
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
            to="/terrain/demande-ok"
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
            <Icon name="arrowUp" />
            Envoyer la demande
          </Link>
        </div>
      </div>
    </div>
  );
}
