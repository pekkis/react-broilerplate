export function getStyleLoader(env, ret, loaders)
{
    var loader;
    if (env !== 'prod') {
        loaders.unshift('style-loader');
        ret.loaders = loaders;
    } else {
        ret.loader = ExtractTextPlugin.extract(
            'style-loader',
            loaders
        );
    }
    return ret;
}
