const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base'), {
    context: __dirname,

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: {
            root: 'sftxCommControl',
            amd: 'sftx-comm-control',
            commonjs: 'sftx-comm-control'
        },
        publicPath:'/lib/',
        // libraryExport: 'default', 不是默认的
        libraryTarget: 'umd',
    },

    externals: {
        vue: 'vue',
    },
});
