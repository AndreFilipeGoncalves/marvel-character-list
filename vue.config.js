const path = require('path')
module.exports = {
    publicPath: '',
    pluginOptions: {},
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/styles/themes.scss";`
            }
        }
    }
}
