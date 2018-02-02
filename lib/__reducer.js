'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = createRouter;
exports.setRouterParams = setRouterParams;
exports.setRouterSearch = setRouterSearch;
exports.getRouterParams = getRouterParams;
exports.getRouterSearch = getRouterSearch;

var _location = require('./location');

var SET_ROUTER_PARAMS = 'SET_ROUTER_PARAMS';
var SET_ROUTER_SEARCH = 'SET_ROUTER_SEARCH';

var initialState = {
  params: { pageName: null, slug: null },
  search: null
};

function createRouter(routerReducer) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function router() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
      case SET_ROUTER_PARAMS:
        return Object.assign({}, state, { params: action.params });
      case SET_ROUTER_SEARCH:
        var searchString = action.searchString;
        if (searchString !== state.searchString) {
          return Object.assign({}, state, {
            search: (0, _location.getLocationSearch)(searchString),
            searchString: searchString
          });
        } else {
          return state;
        }
      default:
        return state;
    }
  }
  return router;
}

function setRouterParams(params) {
  return { type: SET_ROUTER_PARAMS,
    params: params
  };
}

function setRouterSearch(searchString) {
  return { type: SET_ROUTER_SEARCH,
    searchString: searchString
  };
}

function getRouterParams(state) {
  return state.router.params;
}

function getRouterSearch(state) {
  return state.router.search;
}