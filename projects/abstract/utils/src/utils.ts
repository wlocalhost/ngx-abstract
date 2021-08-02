/**
 * Generate a random, unique string
 */
export function randomString(from = 10, to = 5): string {
  return btoa(String(Math.random())).substr(from, to).toLowerCase();
}

/**
 * Check if it's an object and it's not empty
 */
export function isObjectEmpty(obj: object | null): boolean {
  return !Boolean(obj) || Object.keys(obj).length === 0 && obj.constructor === Object;
}
