// import { useCallback, useState } from "react";

// export function useToggle(initialState = false) {
//   const [state, setState] = useState(initialState);

//   const toggleState = useCallback(() => setState((state) => !state), []);

//   return [state, toggleState];
// }

import { useCallback, useState } from "react";

export function useToggle(
  initialState: boolean = false
): [boolean, () => void] {
  const [state, setState] = useState(initialState);

  const toggleState = useCallback(() => setState((state) => !state), []);

  return [state, toggleState];
}
