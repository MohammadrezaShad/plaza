const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = (env) => {
    return merge(common(env), {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            port: 3000,
            contentBase: path.join(__dirname, '../src/assets')
        },
        module: {
            rules: [
            ]
        }
    })
};

