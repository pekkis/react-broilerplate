import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistory, routeReducer } from 'react-router-redux';

export function createStore(reducers, history) {

    const createStoreWithMiddleware = compose(
        applyMiddleware(
            thunk,
            syncHistory(history),
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(reduxCreateStore);

    const reducer = combineReducers({
        ...reducers,
        routing: routeReducer
    });
    const store = createStoreWithMiddleware(reducer);

    return store;
}
