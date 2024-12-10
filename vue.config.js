const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/aist_site/" : "/",
  transpileDependencies: true,
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Спортивная школа Аист - Нижний Тагил";
            return args;
        })
}
})
