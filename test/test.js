var path = require('path');
var assert = require('assert');


describe('confo', function() {
  beforeEach(function() {
    this.confo = require('..');
  });
  afterEach(function() {
    this.confo = undefined;
  });
  it('should add _confo property in test environment', function() {
    assert.equal(typeof this.confo._confo, 'object');
  });
  it('should not add _confo property in other environments', function() {
    var confo = this.confo._confo.load({ NODE_ENV: 'dev' });;
    assert.equal(confo._confo, undefined);
  });
  it('should use right env', function() {
    assert.equal(this.confo._confo.env, 'test');
  });
  it('should respect CONFO_FILE env variable', function() {
    assert.equal(this.confo._confo.rcPath,
                 path.resolve(process.env.CONFO_FILE));
  });
  it('should throw an error if rc file was not found', function() {
    assert.throws(function() {
      this.confo._confo.load({ CONFO_FILE: 'invalid_path.json' });
    }, Error);
  });
  it('should throw an error if rc file cant be parsed', function() {
    assert.throws(function() {
      this.confo._confo.load({ CONFO_FILE: 'confo_invalid.json' });
    }, Error);
  });
  it('should throw an error if path for current env was not found', function() {
    assert.throws(function() {
      this.confo._confo.load({ NODE_ENV: 'invalid' });
    }, Error);
  });
  it('should throw an error if config file was not found', function() {
    assert.throws(function() {
      this.confo._confo.load({ NODE_ENV: 'production' });
    }, Error);
  });
  it('should throw an error if config file cant be parsed', function() {
    assert.throws(function() {
      this.confo._confo.load({ NODE_ENV: 'errenv' });
    }, Error);
  });
  it('should set config values properly', function() {
    var config = this.confo._confo.load({ NODE_ENV: 'dev' });
    assert.equal(config.db.host, '127.0.0.1');
    assert.equal(config.db.port, 28017);
  });
});
