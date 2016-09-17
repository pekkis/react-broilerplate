import ExtractTextPlugin from 'extract-text-webpack-plugin';

export function getStyleLoader(env, base) {
  const ret = {
    ...base,
  };

  if (env === 'production') {
    ret.loaders = [
      ExtractTextPlugin.extract(
        'style-loader',
        base.loaders
      ),
    ];
  } else { // not production
    ret.loaders.unshift('style-loader');
  }

  return ret;
}
