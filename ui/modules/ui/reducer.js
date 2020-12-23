import { SET_FLASH_MESSAGE, CLEAR_FLASH_MESSAGE } from "./actions";

const initialState = {
  flashMessage: null,
};

function reducer(state = initialState, action) {
  if (action.type.endsWith("_FAILURE")) {
    return {
      ...state,
      flashMessage: { type: "error", message: action.payload.error },
    };
  }

  switch (action.type) {
    case SET_FLASH_MESSAGE:
      return { ...state, flashMessage: action.payload.flashMessage };
    case CLEAR_FLASH_MESSAGE:
      return { ...state, flashMessage: null };
    default:
      return state;
  }
}

export default reducer;
