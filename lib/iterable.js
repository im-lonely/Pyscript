/**
 *
 * @param {any} iterable Iterable to check
 * @returns A boolean indicating whether it is all or not
 */
export function all(iterable) {
  for (const element of iterable) if (!element) return false;
  return true;
}

/**
 *
 * @param {any} iterable Iterable to check
 * @returns A boolean indicating whether it is any or not
 */
export function any(iterable) {
  for (const element of iterable) if (element) return true;
  return false;
}
