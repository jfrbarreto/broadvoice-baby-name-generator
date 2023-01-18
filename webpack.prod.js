const { entry, moduleDef, resolveDef, pluginDef, devServerDef } = require('./.shared-config');
const path = require('path');

module.exports = {
    mode: 'production',
    output: {
        path: path.join(__dirname, '/build/'),
        chunkFilename: '[contenthash].bundle.js'
    },
    optimization: {
        minimize: true
    },
    // shared
    devServer: devServerDef,
    module: moduleDef,
    resolve: resolveDef,
    plugins: pluginDef('.env.production'),
    entry
};
