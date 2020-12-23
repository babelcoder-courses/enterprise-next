import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_FAILURE,
  EDIT_ARTICLE_REQUEST,
  EDIT_ARTICLE_FAILURE,
  REMOVE_ARTICLE_REQUEST,
  REMOVE_ARTICLE_FAILURE,
} from "./actions";

const initialState = {
  isLoading: false,
  items: [],
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
    case FETCH_ARTICLE_REQUEST:
    case REMOVE_ARTICLE_REQUEST:
    case CREATE_ARTICLE_REQUEST:
    case EDIT_ARTICLE_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, isLoading: false, items: action.payload.articles };
    case FETCH_ARTICLE_SUCCESS:
      return { ...state, isLoading: false, items: [action.payload.article] };
    case FETCH_ARTICLES_FAILURE:
    case FETCH_ARTICLE_FAILURE:
    case REMOVE_ARTICLE_FAILURE:
    case CREATE_ARTICLE_FAILURE:
    case EDIT_ARTICLE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}

export default reducer;
