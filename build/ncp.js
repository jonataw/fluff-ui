const ncp = require('ncp');
const fs = require('fs');

ncp(
  './src/components',
  './dist/components',
  {
    filter: source => {
      if (fs.lstatSync(source).isDirectory()) {
        return true;
      } else {
        return source.match(/.*scss/) != null;
      }
    }
  },
  function(err) {
    if (err) {
      return console.error(err);
    }
  }
);
