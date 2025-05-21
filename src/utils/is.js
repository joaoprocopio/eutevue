export function isNil(value) {
  return value == null
}

export function isComp(value) {
  return !isNil(value) && typeof value?.render === 'function'
}

export function isFn(value) {
  return typeof value === 'function'
}
