const path = require('path');

module.exports = {

    entry: './app.jsx',
    output: {

        filename: "index.js",
        path: __dirname,
        publicPath: '/'
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

                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [ ".js", ".jsx" ]
    }
}