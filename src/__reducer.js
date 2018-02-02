import { getLocationSearch } from './location'

const SET_ROUTER_PARAMS = 'SET_ROUTER_PARAMS'
const SET_ROUTER_SEARCH = 'SET_ROUTER_SEARCH'

const initialState = {
  params: { pageName: null, slug: null },
  search: null
}

export function createRouter (routerReducer, config = {}) {
  function router (state = initialState, action) {
    switch (action.type) {
      case SET_ROUTER_PARAMS:
        return Object.assign({}, state, { params: action.params })
      case SET_ROUTER_SEARCH:
        const searchString = action.searchString
        if (searchString !== state.searchString) {
          return Object.assign({}, state, {
            search: getLocationSearch(searchString),
            searchString
          })
        } else {
          return state
        }
      default:
        return state
    }
  }
  return router
}

export function setRouterParams (params) {
  return { type: SET_ROUTER_PARAMS,
    params
  }
}

export function setRouterSearch (searchString) {
  return { type: SET_ROUTER_SEARCH,
    searchString
  }
}

export function getRouterParams (state) {
  return state.router.params
}

export function getRouterSearch (state) {
  return state.router.search
}
