export { Complex } from "./lib/classes/Complex.js";
export { abs, bin, bytearray, bytes, callable } from "./lib/math.js";
export { bool, breakpoint, range } from "./lib/utils.js";

class Pyscript {
  constructor() {}
}

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

/**
 *
 * @param {object} object The object to convert to ascii
 * @returns String representation of the object – non-ascii characters escaped
 */
export function ascii(object) {
  return JSON.stringify(object)
    .split("")
    .map(function (char) {
      const charCode = char.charCodeAt(0);
      return charCode > 127
        ? "\\u" +
            new Array(5 - charCode.toString(16).length).join("0") +
            charCode.toString(16)
        : char;
    })
    .join("");
}
