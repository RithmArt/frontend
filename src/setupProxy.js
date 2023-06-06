const { createProxyMiddleware } = require("http-proxy-middleware");

const commonConfig = {
  secure: true,
  changeOrigin: true,
  logLevel: "debug",
};

const rewriteDevFn = function (path, req) {
  const replaced = path
    .replace("/campfireAccounts/", "/")
    .replace("/bpi_network/", "/")
    .replace("/ipfs/", "/");
  return replaced;
};

module.exports = function (app) {
  app.use("/manifest.json", function (req, res, next) {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    });
    next();
  });

  app.use(
    "/campfireAccounts/**",
    createProxyMiddleware({
      target: `https://campfire.exchange/api/accounts/`,
      pathRewrite: rewriteDevFn,
      ...commonConfig,
    })
  );
  app.use(
    "/bpi_network/**",
    createProxyMiddleware({
      target: `https://artists.bpi.network/nfts/`,
      pathRewrite: rewriteDevFn,
      ...commonConfig,
    })
  );
  app.use(
    "/ipfs/**",
    createProxyMiddleware({
      target: `ipfs://`,
      pathRewrite: rewriteDevFn,
      ...commonConfig,
    })
  );
};
