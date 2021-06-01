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
} from './user-action';

const register = (userData) => async (dispatch) => {
  console.log(userData);
  dispatch(registerRequest());
  try {
    const response = await axios.post(`https://connections-api.herokuapp.com/users/signup`, userData);
    console.log(response);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('https://connections-api.herokuapp.com/users/login', userData);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export default { register, login };
