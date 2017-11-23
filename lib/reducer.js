'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = createRouter;
exports.getRouterParams = getRouterParams;
exports.getRouterSearch = getRouterSearch;

var _location = require('./location');

var initialState = {
  location: null,
  params: null,
  search: null
};

function createRouter(routerReducers) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /*
  const { links } = config
  const paramKeys = []
  console.log('links', links)
  links.forEach(link => {
    const chunks = link.split('/')
    chunks.forEach(chunk => {
      if (chunk[0] === ':') {
        const paramKey = chunk.slice(1)
        if (!paramKeys.includes(paramKey)) {
          paramKeys.push(paramKey)
        }
      }
    })
  })
  console.log('paramKey', paramKeys)
  */
  function router() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var newState = routerReducers(state, action);
    // params from pathname
    // search object from search string
    var searchString = newState.location && newState.location.search;
    var previousSearchString = state.location && state.location.search;
    if (searchString !== previousSearchString) {
      newState.search = (0, _location.getLocationSearch)(searchString);
    }
    return newState;
  }
  return router;
}

function getRouterParams(state) {
  return state.router.params;
}

function getRouterSearch(state) {
  return state.router.search;
}