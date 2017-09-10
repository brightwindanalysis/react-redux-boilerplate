import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../root/DevTools'

const enhancer = compose(
  applyMiddleware(),
  DevTools.instrument()
)

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )
  }

  return store
}
