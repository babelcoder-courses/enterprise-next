import Router from "next/router";

import axios from "lib/axios";
import * as uiActions from "modules/ui/actions";

const FETCH_ARTICLES_REQUEST = "app/articles/FETCH_ARTICLES_REQUEST";
const FETCH_ARTICLES_SUCCESS = "app/articles/FETCH_ARTICLES_SUCCESS";
const FETCH_ARTICLES_FAILURE = "app/articles/FETCH_ARTICLES_FAILURE";
const FETCH_ARTICLE_REQUEST = "app/article/FETCH_ARTICLE_REQUEST";
const FETCH_ARTICLE_SUCCESS = "app/article/FETCH_ARTICLE_SUCCESS";
const FETCH_ARTICLE_FAILURE = "app/article/FETCH_ARTICLE_FAILURE";
const CREATE_ARTICLE_REQUEST = "app/article/CREATE_ARTICLE_REQUEST";
const CREATE_ARTICLE_SUCCESS = "app/article/CREATE_ARTICLE_SUCCESS";
const CREATE_ARTICLE_FAILURE = "app/article/CREATE_ARTICLE_FAILURE";
const EDIT_ARTICLE_REQUEST = "app/article/EDIT_ARTICLE_REQUEST";
const EDIT_ARTICLE_SUCCESS = "app/article/EDIT_ARTICLE_SUCCESS";
const EDIT_ARTICLE_FAILURE = "app/article/EDIT_ARTICLE_FAILURE";
const REMOVE_ARTICLE_REQUEST = "app/article/REMOVE_ARTICLE_REQUEST";
const REMOVE_ARTICLE_SUCCESS = "app/article/REMOVE_ARTICLE_SUCCESS";
const REMOVE_ARTICLE_FAILURE = "app/article/REMOVE_ARTICLE_FAILURE";

const fetchArticles = (category) => async (dispatch) => {
  dispatch({ type: FETCH_ARTICLES_REQUEST });

  try {
    const path = category ? `/articles?category=${category}` : "/articles";
    const { data: articles } = await axios.get(path);
    console.log(articles);
    dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: { articles } });
  } catch (ex) {
    dispatch({ type: FETCH_ARTICLES_FAILURE, payload: { error: ex.message } });
  }
};

const fetchArticle = (id) => async (dispatch) => {
  dispatch({ type: FETCH_ARTICLE_REQUEST });

  try {
    const { data: article } = await axios.get(`/articles/${id}`);
    dispatch({ type: FETCH_ARTICLE_SUCCESS, payload: { article } });
  } catch (ex) {
    dispatch({ type: FETCH_ARTICLE_FAILURE, payload: { error: ex.message } });
  }
};

const createArticle = (article) => async (dispatch) => {
  dispatch({ type: CREATE_ARTICLE_REQUEST });

  try {
    const { data } = await axios.post("/articles", article);
    dispatch({ type: CREATE_ARTICLE_SUCCESS, payload: { article: data } });
    dispatch(
      uiActions.setFlashMessage("success", "The article has been created.")
    );
    Router.push("/articles");
  } catch (ex) {
    dispatch({ type: CREATE_ARTICLE_FAILURE, payload: { error: ex.message } });
  }
};

const editArticle = (id, article) => async (dispatch) => {
  dispatch({ type: EDIT_ARTICLE_REQUEST });

  try {
    const { data } = await axios.patch(`/articles/${id}`, article);
    dispatch({ type: EDIT_ARTICLE_SUCCESS, payload: { article: data } });
    dispatch(
      uiActions.setFlashMessage("success", "The article has been updated.")
    );

    Router.push("/articles");
  } catch (ex) {
    dispatch({ type: EDIT_ARTICLE_FAILURE, payload: { error: ex.message } });
  }
};

const removeArticle = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_ARTICLE_REQUEST });

  try {
    await axios.delete(`/articles/${id}`);
    dispatch({ type: REMOVE_ARTICLE_SUCCESS, payload: { id } });
    dispatch(
      uiActions.setFlashMessage("success", "The article has been removed.")
    );
    Router.push("/articles");
  } catch (ex) {
    dispatch({ type: REMOVE_ARTICLE_FAILURE, payload: { error: ex.message } });
  }
};

export {
  fetchArticles,
  fetchArticle,
  createArticle,
  editArticle,
  removeArticle,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILURE,
  REMOVE_ARTICLE_REQUEST,
  REMOVE_ARTICLE_SUCCESS,
  REMOVE_ARTICLE_FAILURE,
};
