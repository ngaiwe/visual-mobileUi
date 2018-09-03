const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path')

module.exports = function override(config, env) {
    config.resolve.alias = {
        '@': path.resolve(__dirname, 'src')
    }
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
        config,
    );
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1DA57A" },
        javascriptEnabled: true,
    })(config, env);
    return config;
};