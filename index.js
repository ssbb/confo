var path = require('path');
var fs = require('fs');
var winston = require('winston');


var config;
var rc;
var configRoot;
var configPath;
var root;
var env_name;
var rcRoot;
var rcPath;

var load = function(env) {
  env = env || {};
  env_name = env.NODE_ENV || process.env.NODE_ENV || 'dev';
  rcRoot = (require.main ? path.dirname(require.main.filename) : '.');
  rcPath = path.join(rcRoot, 'confo.json');

  if (env.CONFO_FILE || process.env.CONFO_FILE) {
    rcPath = path.resolve(env.CONFO_FILE || process.env.CONFO_FILE);
  }

  try {
    rc = require(rcPath);
  } catch(e) {
    console.error('Could not find confo.json file.'.red);
    throw e;
  }

  rcRoot = path.dirname(rcPath);
  configPath = rc[env_name];

  if (!configPath) {
    console.error('Can\'t find config path for env'.red,
                  env_name.yellow + '. Check you confo.json file.'.red);
    throw new Error(rcPath);
  }
  configPath = path.resolve(rcRoot, configPath);

  try {
    config = require(configPath);
  } catch (e) {
    console.error('Could not find or load config file at'.red, configPath.blue);
    throw e;
  }

  if (env_name === 'test') {
    config._confo = {
      env: env_name,
      rcPath: rcPath,
      configPath: configPath,
      load: load
    };
  }
  return config;
};


load();
module.exports = config;
