module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // 使用 @babel/plugin-transform-runtime 这个插件就无需使用 usage: 'builtIn'
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
  ],
}
