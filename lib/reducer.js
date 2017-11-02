'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;

var _actions = require('./actions');

var _location = require('./location');

var initialState = {};

function search() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.SET_SEARCH:
      return (0, _location.getLocationSearch)(action.searchString);
    default:
      return state;
  }
}