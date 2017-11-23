import { getLocationSearch } from './location'

const initialState = {
  location: null,
  params: null,
  search: null
}

export function createRouter (routerReducers, config = {}) {
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
  function router (state = initialState, action) {
    let newState = routerReducers(state, action)
    // params from pathname
    // search object from search string
    const searchString = newState.location && newState.location.search
    const previousSearchString = state.location && state.location.search
    if (searchString !== previousSearchString) {
      newState.search = getLocationSearch(searchString)
    }
    return newState
  }
  return router
}

export function getRouterParams (state) {
  return state.router.params
}

export function getRouterSearch (state) {
  return state.router.search
}
