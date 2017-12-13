'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = createRouter;
exports.setRouterParams = setRouterParams;
exports.getRouterParams = getRouterParams;
exports.getRouterSearch = getRouterSearch;

var _location = require('./location');

var SET_ROUTER_PARAMS = 'SET_ROUTER_PARAMS';

var initialState = {
  location: null,
  params: null,
  search: null
};

function createRouter(routerReducers) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function router() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    // parent
    var newState = routerReducers(state, action);
    // params
    if (action.type === SET_ROUTER_PARAMS) {
      newState.params = action.params;
    }
    // search
    var searchString = newState.location && newState.location.search;
    var previousSearchString = state.location && state.location.search;
    if (searchString !== previousSearchString) {
      newState.search = (0, _location.getLocationSearch)(searchString);
    }
    // return
    return newState;
  }
  return router;
}

function setRouterParams(params) {
  return { type: SET_ROUTER_PARAMS,
    params: params
  };
}

function getRouterParams(state) {
  return state.router.params;
}

function getRouterSearch(state) {
  return state.router.search;
}