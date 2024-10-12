/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true, // Skip TypeScript checks during build for faster builds
    },
    experimental: {
      turboMode: true, // Enable Turbopack (faster builds)
    },
    outputFileTracing: true, // Cache server-related files for efficiency
  };
  
  export default nextConfig;