const path = require('path');

module.export = {

    entry: './app.js',

    output: {
        path: __dirname,
        filename: 'index.js',
        publicPath: '/'
    },

    module: {

        rules: {

            test: /\.js$/,
            exclude: /node_modules/,
            use: {

                loader: 'babel-loader',
                options: {

                    presets: ['@babel/preset-env']
                }
            }
        }
    },

    resolve: {

        extensions: [ '.js' ]
    }
}