'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = createRouter;
exports.setRouterParams = setRouterParams;
exports.getRouterParams = getRouterParams;
exports.getRouterSearch = getRouterSearch;

var _reactRouterRedux = require('react-router-redux');

var _location = require('./location');

var SET_ROUTER_PARAMS = 'SET_ROUTER_PARAMS';

var initialState = { location: {
    pathname: null
  },
  params: null,
  pathnames: null,
  search: null
};

function createRouter(routerReducer) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function router() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    // parent
    var newState = routerReducer ? routerReducer(state, action) : Object.assign({}, initialState);
    // params
    if (action.type === SET_ROUTER_PARAMS) {
      newState.params = action.params;
    }
    // search
    if (action.type === _reactRouterRedux.LOCATION_CHANGE) {
      var searchString = newState.location && newState.location.search;
      var previousSearchString = state.location && state.location.search;
      if (searchString !== previousSearchString) {
        newState.search = (0, _location.getLocationSearch)(searchString);
      }
    }
    /*
    if (action.type === CALL_HISTORY_METHOD) {
      // pathnames
      console.log('action', action)
      const pathname = action.payload.pathname
      if (!state.pathnames) {
        newState.pathnames = [pathname]
      } else {
        newState.pathnames.push(pathname)
      }
    }
    */
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