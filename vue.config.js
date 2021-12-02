module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/toropovTodo/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/styles/style.scss";'
      }
    }
  }
}
