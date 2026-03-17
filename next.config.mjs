/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static-export friendly config to avoid 404 issues on simple static hosts.
  output: "export",
  trailingSlash: true
};

export default nextConfig;
