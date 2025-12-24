// Base path for assets when deployed to GitHub Pages
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Helper function to get full asset path
export function getAssetPath(path: string): string {
    // If path already starts with http:// or https://, return as is
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path
    }

    // If path doesn't start with /, add it
    const normalizedPath = path.startsWith('/') ? path : `/${path}`

    // Return path with basePath prepended
    return `${BASE_PATH}${normalizedPath}`
}
