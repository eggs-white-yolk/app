const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭 校验工具
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn/',
        // pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
