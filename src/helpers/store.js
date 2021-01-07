import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer, { createReducer } from "../reducers";

export const middleWares = [thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();

export const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleWares, loggerMiddleware))(createStore)


export const store = createStoreWithMiddleware(createReducer())


export default function configureStore() {
    // Add a dictionary to keep track of the registered async reducers
    store.asyncReducers = {};

    // Create an inject reducer function
    // This function adds the async reducer, and creates a new combined reducer
    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };

    // Return the modified store
    return store;
}

export function getStore() {
    return store;
}

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// );
