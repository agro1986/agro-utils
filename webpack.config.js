const path = require('path');

module.exports = {
    entry: ['./node_modules/regenerator-runtime/runtime.js', './index.js'],
    output: {
        filename: 'agroutil.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'util'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};