'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSearch = setSearch;
var SET_SEARCH = exports.SET_SEARCH = 'SET_SEARCH';

function setSearch(searchString) {
  return { searchString: searchString,
    type: SET_SEARCH
  };
}