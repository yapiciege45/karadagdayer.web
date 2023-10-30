/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.pixabay.com']
    },
    env: {
        API_URL: process.env.API_URL
    }
}

module.exports = nextConfig
