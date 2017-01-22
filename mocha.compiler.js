require('babel-core/register');

//This is used to ignore imports that are unnecessary in tests like svg or css
function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.svg'] = noop;