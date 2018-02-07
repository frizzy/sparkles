import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import AddControlReducer from '../reducers/AddControlReducer';

const placeholder = (state = {}, action) => (state);


const reducers = combineReducers({
    placeholder,
    AddControlReducer
});

const middleware = applyMiddleware(...[
    thunkMiddleware,
    ...(process.env.NODE_ENV === 'development' ? [ logger ] : [])
]);

export const store = createStore(reducers, middleware);
