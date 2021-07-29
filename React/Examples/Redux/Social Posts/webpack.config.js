const 
    path = require('path'),
    webpack = require('webpack');

module.exports = 
    {

        cache: false,
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
                            ],

                            plugins: [
                                "@babel/transform-runtime"
                            ]
                    
                        }
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify("development")
            })
        ],
        mode: 'development'
    }