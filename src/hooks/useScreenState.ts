import { useState } from 'react';

type Setter<S> = (patch: Partial<S>) => void;

/**
 * État local d'un écran : `derive` reçoit l'état courant et un setter partiel,
 * et renvoie les valeurs et actions affichées (dialogues, onglets, compteurs).
 */
export function useScreenState<S extends object, R>(initial: S, derive: (state: S, set: Setter<S>) => R): R {
  const [state, setState] = useState<S>(initial);
  const set: Setter<S> = (patch) => setState((prev) => ({ ...prev, ...patch }));
  return derive(state, set);
}
