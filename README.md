# confo - simple config file reader<a id="sec-1" name="sec-1"></a>

[![img](http://img.shields.io/npm/v/confo.svg)](https://www.npmjs.com/package/confo)
[![img](http://img.shields.io/npm/l/confo.svg)](https://www.npmjs.com/package/confo)
[![img](http://img.shields.io/github/stars/ssbb/confo.svg)](https://github.com/ssbb/confo)
[![img](http://img.shields.io/npm/dm/confo.svg)](https://www.npmjs.com/package/confo)
[![img](http://img.shields.io/travis/ssbb/confo.svg)](https://travis-ci.org/ssbb/confo)
[![img](http://img.shields.io/coveralls/ssbb/confo.svg)](https://coveralls.io/r/ssbb/confo)

Managing configs for different environments (based on `NODE_ENV` variable) in `js` or `json` format.

## How to use<a id="sec-1-1" name="sec-1-1"></a>

-   Install it with `npm install confo`
-   Create a `confo.json` file in the same folder as the main entry point (usually project root). This file must contain a `NODE_ENV: PATH` JSON object like this:

  ```javascript
  {
    "dev": "./config/environments/dev.js",
    "production": "./config/environments/production.js",
    "test": "./config/environments/test.js"
  }
  ```
     Also you can set `CONFO_FILE` environment variable with full path to `confo.json` file.
-   Create a config file. I prefer to write config files with `JavaScript`. It gives me the opportunity to use the language features like path joining or extending a base config. But you can use `JSON` as well.

  ```javascript
  var config = require('./base.js');

  config.db.port = 28017;
  config.db.host = '127.0.0.1';

  module.exports = config;
  ```
-   Just require `confo` and use it:

  ```javascript
  var confo = require('confo');

  console.log(confo.db.host);
  ```

-   That's all!

## License<a id="sec-1-2" name="sec-1-2"></a>

MIT
