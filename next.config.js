/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.frag$/,
        use: 'raw-loader',
      },
      {
        test: /\.vert$/,
        use: 'raw-loader',
      },
    );
    return config;
  },
};

module.exports = nextConfig;
