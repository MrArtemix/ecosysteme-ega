# ecosysteme-ega

Repository for the EGA ecosystem project, including the test, design, and security documentation.

## Applications

The front end (React, TypeScript, Vite) implements the 43 screens of the « Maquettes EGA » design, across three apps on one codebase:

| App | Routes | Format |
| --- | --- | --- |
| EGA Central | `/central/*` (19 screens: connexion, tableau de bord, stock, mouvements, entrées, sorties, préparation, bon, retours, transferts, ajustements, catalogue, sites, utilisateurs, audit, exports…) | Desktop |
| EGA Terrain | `/terrain/*` (18 screens: accueil, demande en 4 étapes, scan, bons, réception, signature, retour, file d'envoi…) | Mobile |
| EGA Direction | `/direction/*` (6 screens: tour de contrôle, alertes, stock, mouvement, paramètres) | Mobile |

The full route list is in `src/routes.tsx`. `/central`, `/terrain` and `/direction` redirect to their sign-in screens.

```bash
npm install
npm run dev
```

## Structure

- `src/styles/tokens.css`: CSS variables generated from the EGA design system (`design/ega-tokens.json`), with light, dark (`data-theme="dark"`) and high-contrast (`data-theme="contrast"`) themes.
- `src/components/`: shared components: `CentralSidebar` (admin and magasinier menus), `CentralTopbar` (search, network status, notifications), `Icon`, `Pattern`, `Logo`.
- `src/pages/{central,terrain,direction}/`: one page per screen.
- `design/maquettes/`: the design source files (`.dc.html`) and the canvas index.

## Updating from the design

Pages are generated from the design files by `tools/convert-maquettes.py`: inline styles mapped to the EGA tokens, links turned into routes, icons and patterns factored into the shared components, and each screen's state logic (dialogs, toasts, tabs, quantity steppers) ported to `useScreenState`. After replacing the files in `design/maquettes/`:

```bash
npm run convert
```
