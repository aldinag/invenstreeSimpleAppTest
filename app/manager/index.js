import { combineReducers, createStore } from 'redux';

import users from './user'

const AppReducers = combineReducers({
    users,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;