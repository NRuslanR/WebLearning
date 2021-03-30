const path = require('path');

module.export = {

    entry: './app.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
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
    }
}