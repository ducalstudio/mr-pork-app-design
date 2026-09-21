/* Minimal state holder: get(), set(patch), subscribe(fn). */
export function createStore(initial) {
  let state = initial;
  const subs = [];
  return {
    get: () => state,
    set(patch) {
      state = Object.assign({}, state, patch);
      subs.forEach((fn) => fn(state));
    },
    subscribe(fn) {
      subs.push(fn);
    }
  };
}
