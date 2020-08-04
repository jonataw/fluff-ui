const devPresets = ['@vue/babel-preset-app'];
const buildPresets = ['@babel/env', '@babel/preset-typescript'];
module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread']
  ],
  presets: process.env.NODE_ENV === 'development' ? devPresets : buildPresets
};
