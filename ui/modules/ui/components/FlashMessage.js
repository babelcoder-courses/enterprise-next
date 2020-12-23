import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import * as actions from "../actions";

const FlashMessage = () => {
  const dispatch = useDispatch();
  const flashMessage = useSelector((state) => state.ui.flashMessage);

  const clearFlashMessage = () => dispatch(actions.clearFlashMessage());

  if (!flashMessage) return null;

  return (
    <Snackbar open onClose={clearFlashMessage}>
      <Alert onClose={clearFlashMessage} severity={flashMessage.type}>
        {flashMessage.message}
      </Alert>
    </Snackbar>
  );
};

export default FlashMessage;
