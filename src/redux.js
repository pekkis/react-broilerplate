import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistory, routeReducer } from 'react-router-redux';

export function createStore(
  reducers,
  history,
  middlewares = [],
  enhancers = []
) {
    const createStoreWithMiddleware = compose(
        applyMiddleware(
            thunk,
            syncHistory(history),
            ...middlewares
        ),
        ...enhancers
    )(reduxCreateStore);

    const reducer = combineReducers({
        ...reducers,
        routing: routeReducer
    });
    const store = createStoreWithMiddleware(reducer);

    return store;
}
