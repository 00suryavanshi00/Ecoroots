/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'standalone',
    reactStrictMode:false,
    
    images:{
        domains:[
            'localhost',
            'storage.googleapis.com',
            'ecoroots-strapicms.onrender.com',
            'ecoroots-strapicms.onrender.comhttps'
        ],
        dangerouslyAllowSVG:true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default nextConfig;
