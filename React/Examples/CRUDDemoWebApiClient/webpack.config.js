const 
    path = require('path');

module.exports = {

    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", "..."]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        port: 8084,
        historyApiFallback: true
    }
}