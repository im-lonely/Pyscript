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

