import axios from 'axios';

import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './user-action';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = (userData) => async (dispatch) => {
  console.log(userData);
  dispatch(registerRequest());
  try {
    const response = await axios.post(`https://connections-api.herokuapp.com/users/signup`, userData);
    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('https://connections-api.herokuapp.com/users/login', userData);
    console.log(response.data.token);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await axios.post('https://connections-api.herokuapp.com/users/logout');

    token.unSet();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    await axios.get('https://connections-api.herokuapp.com/users/current');

    dispatch(getCurrentUserSuccess());
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export default { register, login, logOut };
