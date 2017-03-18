'use strict';

var isprod = require('./isprod');
var skip = false;

function log() {
  if (!isprod() || skip) {
    console.log.apply(console, arguments);
  }
  return this;
}

function info() {
  if (!isprod() || skip) {
    console.info.apply(console, arguments);
  }
  return this;
}

function dir() {
  if (!isprod() || skip) {
    console.dir.apply(console, arguments);
  }
  return this;
}

function warn() {
  if (!isprod() || skip) {
    console.warn.apply(console, arguments);
  }
  return this;
}

function error() {
  if (!isprod() || skip) {
    console.error.apply(console, arguments);
  }
  return this;
}

function ignore() {
  console.error.apply(console, arguments);
  return this;
}

function set(state) {
  if (typeof state == 'boolean') {
    skip = state;
  }
}

module.exports = log;
module.exports.info = info;
module.exports.dir = dir;
module.exports.warn = warn;
module.exports.ignore = ignore;
module.exports.set = set;