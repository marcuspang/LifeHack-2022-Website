const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? "/out/": '',
  basePath: isProd ? "/out" : "",
  env: {
    BACKEND_URL: "/out",
  },
};
