import Router from "next/router";

import axios from "lib/axios";
import * as uiActions from "modules/ui/actions";

const LOGIN_REQUEST = "app/auth/LOGIN_REQUEST";
const LOGIN_SUCCESS = "app/auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "app/auth/LOGIN_FAILURE";
const REGISTER_REQUEST = "app/auth/REGISTER_REQUEST";
const REGISTER_SUCCESS = "app/auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "app/auth/REGISTER_FAILURE";
const LOAD_PROFILE_REQUEST = "app/auth/LOAD_PROFILE_REQUEST";
const LOAD_PROFILE_SUCCESS = "app/auth/LOAD_PROFILE_SUCCESS";
const LOAD_PROFILE_FAILURE = "app/auth/LOAD_PROFILE_FAILURE";
const LOGOUT_SUCCESS = "app/auth/LOGOUT_SUCCESS";
const LOAD_TOKEN = "app/auth/LOAD_TOKEN";

const setToken = (accessToken) => {
  localStorage.setItem("access-token", accessToken);
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

const loadTokenFromStorage = () => {
  const accessToken = localStorage.getItem("access-token");

  return {
    type: LOAD_TOKEN,
    payload: { accessToken },
  };
};

const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const {
      data: { accessToken },
    } = await axios.post("/login", credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: { accessToken } });
    setToken(accessToken);
    dispatch(
      uiActions.setFlashMessage("success", "You have already signed in")
    );
    Router.push("/articles");
  } catch (ex) {
    dispatch({ type: LOGIN_FAILURE, payload: { error: ex.message } });
  }
};

const register = (credentials) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    const {
      data: { accessToken },
    } = await axios.post("/register", credentials);
    dispatch({ type: REGISTER_SUCCESS, payload: { accessToken } });
    setToken(accessToken);
    dispatch(
      uiActions.setFlashMessage("success", "You have already registered")
    );
    Router.push("/articles");
  } catch (ex) {
    dispatch({ type: REGISTER_FAILURE, payload: { error: ex.message } });
  }
};

const loadProfile = () => async (dispatch) => {
  dispatch({ type: LOAD_PROFILE_REQUEST });

  try {
    const { data: profile } = await axios.get("/profile");
    dispatch({ type: LOAD_PROFILE_SUCCESS, payload: { profile } });
  } catch (ex) {
    dispatch({ type: LOAD_PROFILE_FAILURE, payload: { error: ex.message } });
  }
};

const logout = () => {
  delete axios.defaults.headers.common["Authorization"];
  localStorage.removeItem("access-token");
  return { type: LOGOUT_SUCCESS };
};

export {
  loadTokenFromStorage,
  login,
  register,
  loadProfile,
  logout,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOAD_PROFILE_REQUEST,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAILURE,
  LOGOUT_SUCCESS,
  LOAD_TOKEN,
};
