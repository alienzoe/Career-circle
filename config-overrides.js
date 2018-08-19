const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config = injectBabelPlugin("react-html-attrs", config);
  config = injectBabelPlugin("transform-decorators-legacy", config);
  config = injectBabelPlugin("transform-class-properties", config);

  return config;
};
