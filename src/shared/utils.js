/**
 *
 * Generates a unique string for use in React "key" when iterating/mapping
 * Trying to avoid adding the Node UUID package to the app solely for use as a unique key in React
 *
 * @param {string} prefix - prefix for the unique string
 * @returns {string} - unique string
 */
export function generateKey(prefix) {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}
