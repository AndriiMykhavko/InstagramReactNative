import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {authReducer} from './auth/index';
import {postsReducer} from './posts/index';
import {profileReducer} from './profile/index';
import logger from 'redux-logger';

let reducers = combineReducers({
  auth: authReducer,
  postsPage: postsReducer,
  profilePage: profileReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

export default store;
