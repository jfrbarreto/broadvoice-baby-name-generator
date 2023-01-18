const { entry, moduleDef, resolveDef, pluginDef, devServerDef } = require('./webpack.shared');
const path = require('path');

module.exports = {
    mode: 'development',
    output: {
        path: path.join(__dirname, '/build/'),
        publicPath: '/'
    },
    devtool: 'source-map',
    // shared
    devServer: devServerDef,
    module: moduleDef,
    resolve: resolveDef,
    plugins: pluginDef('.env.development'),
    entry
};
