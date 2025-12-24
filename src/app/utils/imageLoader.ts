export default function imageLoader({ src }: { src: string }) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

    // If src already includes the basePath or is an external URL, return as is
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith(basePath)) {
        return src
    }

    // Prepend basePath to the src
    return `${basePath}${src}`
}
