const SET_FLASH_MESSAGE = "app/ui/SET_FLASH_MESSAGE";
const CLEAR_FLASH_MESSAGE = "app/ui/CLEAR_FLASH_MESSAGE";

const setFlashMessage = (type, message) => {
  return {
    type: SET_FLASH_MESSAGE,
    payload: { flashMessage: { type, message } },
  };
};

const clearFlashMessage = () => {
  return { type: CLEAR_FLASH_MESSAGE };
};

export {
  setFlashMessage,
  clearFlashMessage,
  SET_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGE,
};
