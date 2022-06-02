/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  // ImageタグのsrcでURLを指定する場合は参照先を以下domainに追加する
  images: {
    domains: ["tailwindui.com", "images.unsplash.com", "s3.ap-northeast-1.wasabisys.com"],
  },
};
