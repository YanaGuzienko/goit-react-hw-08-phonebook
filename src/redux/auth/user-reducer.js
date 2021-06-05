import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { registerSuccess, registerError, loginSuccess, loginError, logoutSuccess } from './user-action';

const initialState = { name: null, email: null, password: null };

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialState,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
