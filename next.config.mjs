/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Se você estiver usando seu-username.github.io como nome do repositório, remova a linha basePath acima
};

export default nextConfig;
