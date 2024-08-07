module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@app': './app',
            '@assets': './app/assets',
            '@components': './app/components',
            '@constants': './app/constants',
            '@hooks': './app/hooks',
            '@navigation': './app/navigation',
            '@screens': './app/screens'
          }
        }
      ]
    ]
  };
};
