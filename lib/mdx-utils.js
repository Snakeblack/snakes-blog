/**
 * Pure utility functions from the MDX pipeline.
 * These have NO Node.js dependencies (no fs, path, esbuild)
 * and are safe to import from both client and server.
 */

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}
