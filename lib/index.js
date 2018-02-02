'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _location = require('./location');

Object.keys(_location).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _location[key];
    }
  });
});

var _reducer = require('./reducer');

Object.keys(_reducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reducer[key];
    }
  });
});