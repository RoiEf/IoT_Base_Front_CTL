export default (config, env, helpers) => {
  config.optimization.splitChunks.minChunks = 1;
};
