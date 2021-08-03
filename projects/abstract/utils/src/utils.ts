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

/**
 * Get root host of current domain, if `hostname` is empty - `location.hostname` is used.
 * @example
 * ```ts
 * getRootHost('api.my-domain.com') // will return my-domain.com
 * ```
 */
export function getRootHost(hostname = location.hostname): string {
  const root = hostname.split('.').reverse().splice(0, 2).reverse().join('.');
  // localhost doesn't support (.) before it
  return root === 'localhost' ? root : '.' + root;
}
