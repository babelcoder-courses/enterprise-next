import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import ui from "modules/ui/reducer";
import articles from "modules/articles/reducer";

const combinedReducer = combineReducers({
  ui,
  articles,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default reducer;
