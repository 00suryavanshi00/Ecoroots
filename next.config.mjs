/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  
  images: {
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '', // Leave empty if no specific port
      //   pathname: '/**',
      // },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ecoroots-strapicms.onrender.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)", // Apply this CSP header to all routes
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: "default-src 'self'; script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' chrome-extension://<extension_id>/; sandbox;", 
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
