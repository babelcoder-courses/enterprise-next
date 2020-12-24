import { useDispatch } from "react-redux";

import * as actions from "../actions";
import AuthForm from "./AuthForm";

function Register() {
  const dispatch = useDispatch();

  const register = (credentials) => dispatch(actions.register(credentials));

  return (
    <AuthForm
      title="Register"
      submitText="register now"
      altText="Login"
      altLink="/auth/login"
      onSubmit={register}
    />
  );
}

export default Register;
