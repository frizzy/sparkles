import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const placeholder = (state = {}, action) => (state);


const reducers = combineReducers({
    placeholder
});

const middleware = applyMiddleware(...[
    thunkMiddleware,
    ...(process.env.NODE_ENV === 'development' ? [ logger ] : [])
]);

export const store = createStore(reducers, middleware);
