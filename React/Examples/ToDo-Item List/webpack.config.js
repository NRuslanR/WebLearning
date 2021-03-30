const path = require('path');

module.exports = {

    entry: './app/app.jsx',
    output: {

        path: path.resolve(__dirname, 'public'),
        filename: 'app.bundle.js'
    },
    module: {

        rules: [

            {
                test: /(\.jsx$|\.js$)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {

                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}