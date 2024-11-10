/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      
      ignoreBuildErrors: true, // Optional: Skips TypeScript errors during builds
    },
    
    outputFileTracing: true, // Helps cache server-side files

    distDir: 'build',


  }
  

  
  export default nextConfig;
  