import ExtractTextPlugin from 'extract-text-webpack-plugin';

export function getStyleLoader(env, ret, loaders)
{
  var loader;
  if (env === 'prod' || env === 'production') {
    ret.loader = ExtractTextPlugin.extract(
      'style-loader',
      loaders
    );
  } else { // not production
    loaders.unshift('style-loader');
    ret.loaders = loaders;
  }
  return ret;
}
