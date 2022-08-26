/*
 * @FilePath: \Conship-web\vue.config.js
 * @Author: Solitude-DDD
 * @Date: 2022-07-01 13:30:13
 * @Description:
 */
const { defineConfig } = require('@vue/cli-service')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: ['json', 'ymal', 'xml', 'ini', 'javascript', 'html'],
      },
    ])
  },
})
