const path = require('path');

module.exports = {
    target:'web',
    mode: 'production',
    context: path.resolve(__dirname, './src'),
    entry: {
        Game: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                include: /(node_modules\/game-kiln)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};