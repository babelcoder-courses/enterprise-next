import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducer";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// create a makeStore function
const makeStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
