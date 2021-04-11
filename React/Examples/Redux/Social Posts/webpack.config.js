const path = require('path');

module.exports = {

    entry: './src/index.jsx',
    output: {

        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
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