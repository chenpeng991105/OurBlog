'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    exclude: [/node_modules/],
                    loader: 'less-loader'
                }
            ]
        }
    },
    /*devServer: {
        proxy: {
            '/': {
                target: 'http://99ib29.natappfree.cc:9000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    }*/
}
