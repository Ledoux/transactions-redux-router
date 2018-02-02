import { CALL_HISTORY_METHOD,
  LOCATION_CHANGE } from 'react-router-redux'

import { getLocationSearch } from './location'

const SET_ROUTER_PARAMS = 'SET_ROUTER_PARAMS'

const initialState = { location: {
    pathname: null
  },
  params: null,
  pathnames: null,
  search: null
}

export function createRouter (routerReducer, config = {}) {
  function router (state = initialState, action) {
    // parent
    let newState = routerReducer
      ? routerReducer(state, action)
      : Object.assign({}, initialState)
    // params
    if (action.type === SET_ROUTER_PARAMS) {
      newState.params = action.params
    }
    // search
    if (action.type === LOCATION_CHANGE) {
      const searchString = newState.location && newState.location.search
      const previousSearchString = state.location && state.location.search
      if (searchString !== previousSearchString) {
        newState.search = getLocationSearch(searchString)
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
