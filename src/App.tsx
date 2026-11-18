import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { screens } from './routes';

/** Trois applications EGA sur un même socle : Central (bureau), Terrain et Direction (mobile). */
export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {screens.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/central" element={<Navigate to="/central/connexion" replace />} />
          <Route path="/terrain" element={<Navigate to="/terrain/connexion" replace />} />
          <Route path="/direction" element={<Navigate to="/direction/connexion" replace />} />
          <Route path="*" element={<Navigate to="/central/connexion" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
