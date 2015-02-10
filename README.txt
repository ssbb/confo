                         _____________________

                                 README

                          Svyatoslav Bulbakha
                         _____________________


Table of Contents
_________________

confo - simple config file reader
.. How to use
.. License


confo - simple config file reader
=================================

  [[https://img.shields.io/npm/v/confo.svg]]
  [[https://img.shields.io/npm/l/confo.svg]]
  [[https://img.shields.io/github/stars/evilrobts/confo.svg]]
  [[https://img.shields.io/npm/dm/confo.svg]]
  [[https://img.shields.io/travis/evilrobts/confo.svg]]
  [[https://img.shields.io/coveralls/evilrobts/confo.svg]]

  Managing configs for different environments (based on `NODE_ENV'
  variable) in `js' or `json' format.


  [[https://img.shields.io/npm/v/confo.svg]]
  https://www.npmjs.com/package/confo

  [[https://img.shields.io/npm/l/confo.svg]]
  https://www.npmjs.com/package/confo

  [[https://img.shields.io/github/stars/evilrobts/confo.svg]]
  https://www.npmjs.com/package/confo

  [[https://img.shields.io/npm/dm/confo.svg]]
  https://www.npmjs.com/package/confo

  [[https://img.shields.io/travis/evilrobts/confo.svg]]
  https://img.shields.io/travis/joyent/node.svg

  [[https://img.shields.io/coveralls/evilrobts/confo.svg]]
  https://img.shields.io/coveralls/jekyll/jekyll.svg


How to use
~~~~~~~~~~

  - Install it with `npm install confo'
  - Create a `confo.json' file in the same folder as the main entry
    point (usually project root). This file must contain a `NODE_ENV:
    PATH' JSON object like this:

    ,----
    | {
    |   "dev": "./config/environments/dev.js",
    |   "production": "./config/environments/production.js",
    |   "test": "./config/environments/test.js"
    | }
    `----
    Listing 1: confo.json
  - Create a config file. I prefer to write config files with
    `JavaScript'. It gives me the opportunity to use the language
    features like path joining or extending a base config. But you can
    use `JSON' as well.

    ,----
    | var config = require('./base.js');
    |
    | config.db.port = 28017;
    | config.db.host = '127.0.0.1';
    |
    | module.exports = config;
    `----
    Listing 2: config/environments/dev.js

  - Just require `confo' and use it:

    ,----
    | var confo = require('confo');
    |
    | console.log(confo.db.host);
    `----
    Listing 3: app.js

  - That's all!


License
~~~~~~~

  MIT
