/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기존 설정은 유지하면서 아래 내용 추가
  reactStrictMode: true,
  compiler: {
    // Grammarly 속성 무시
    ignoreBuildErrors: true,
    removeConsole: false,
  },
}

module.exports = nextConfig