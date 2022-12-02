// src/fns.ts
function assign(_expect, input, update) {
  return Object.assign(input, update);
}
function keys(expect, obj) {
  return Object.keys(obj).filter(
    (key) => key in expect.shape
  );
}

// src/types.ts
var types_exports = {};
export {
  assign,
  keys,
  types_exports as types
};
