/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/github-pages",
    output: "export",
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
