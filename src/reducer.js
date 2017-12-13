import { getLocationSearch } from './location'

const SET_ROUTER_PARAMS = 'SET_ROUTER_PARAMS'

const initialState = { location: null,
  params: null,
  search: null
}

export function createRouter (routerReducers, config = {}) {
  function router (state = initialState, action) {
    // parent
    let newState = routerReducers(state, action)
    // params
    if (action.type === SET_ROUTER_PARAMS) {
      newState.params = action.params
    }
    // search
    const searchString = newState.location && newState.location.search
    const previousSearchString = state.location && state.location.search
    if (searchString !== previousSearchString) {
      newState.search = getLocationSearch(searchString)
    }
    // return
    return newState
  }
  return router
}

export function setRouterParams (params) {
  return { type: SET_ROUTER_PARAMS,
    params
  }
}

export function getRouterParams (state) {
  return state.router.params
}

export function getRouterSearch (state) {
  return state.router.search
}
