const path = require('path');

module.exports = {
    entry: './lib/Rendering.js',
    output: {
        filename: 'rendering.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: ['/node_modules/'],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        // Don't bundle react
        react: 'react'
    }
};