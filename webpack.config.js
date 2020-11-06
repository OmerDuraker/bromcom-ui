const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'scripts'),
    },
    module: {
        rules: [
            {
                test: /\.css|\.s(c|a)ss$/,
                use: [{
                    loader: 'lit-scss-loader',
                    options: {
                        minify: true, // defaults to false
                    },
                }, 'extract-loader', 'css-loader', 'sass-loader'],
            },
        ],
    }
}