const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@material-ui/core",
  "@material-ui/icons",
]);

module.exports = withPlugins([withTM], {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/articles",
        permanent: true,
      },
    ];
  },
});
