/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pyixtvhlfinkbjiogvsm.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/user-images/**',
          },
        ],
      },
};

export default nextConfig;
