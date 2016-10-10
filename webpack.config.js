var path = require('path'),
    https = require('https'),
    request = require('request'),
    argv = require('minimist')(process.argv.slice(2)),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    plugins = [],
    proxy,
    globals = {
        production: !process.argv[1].endsWith('webpack-dev-server')
    };

var filename = './build/bundle.js';

proxy = {
    target: 'http://localhost:8080',
    secure: false
};

plugins.push(new webpack.DefinePlugin({
    webpack: JSON.stringify(globals)
}));

module.exports = {
    entry: './app/BooksManager.js',
    // devtool: 'inline-source-map',
    output: {
        path: __dirname,
        filename: filename
    },
    resolve: {
        root: [
            path.resolve('./app/')
        ],
        extensions: ['', '.js', '.ts']
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        proxy: {
            '/api/*': proxy
        }
    },
    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
        ],
        customAttrAssign: [/\)?\]?=/]
    },
    pulgins: plugins
};
