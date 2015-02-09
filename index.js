var path = require('path');
var fs = require('fs');
var winston = require('winston');


var rc;
var config;
var configRoot;
var configPath;
var env = process.env.NODE_ENV || 'dev';
var rcRoot = (require.main ? path.dirname(require.main.filename) : '.');
var rcPath = path.join(rcRoot, 'confo.json');

try {
  rc = require(rcPath);
} catch(e) {
  console.error('Could not find confo.json file.'.red);
  throw e;
}

configPath = rc[env];

if (!configPath) {
  console.error('Can\'t find config path for env'.red,
                env.yellow + '. Check you confo.json file.'.red);
  throw new Error(rcPath);
}
configPath = path.resolve(configPath);

try {
  config = require(configPath);
} catch (e) {
  console.error('Could not find or load config file at'.red, configPath.blue);
  throw e;
}

module.exports = config;
