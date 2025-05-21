export function isNil(value) {
  return value == null
}

export function isComp(value) {
  return !isNil(value) && isFn(value?.render)
}

export function isFn(value) {
  return typeof value === 'function'
}
