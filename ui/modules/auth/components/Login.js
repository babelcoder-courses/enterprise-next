import { useDispatch } from "react-redux";

import * as actions from "../actions";
import AuthForm from "./AuthForm";

function Login() {
  const dispatch = useDispatch();

  const login = (credentials) => dispatch(actions.login(credentials));

  return (
    <AuthForm
      title="Login"
      submitText="login"
      altText="Register"
      altLink="/auth/register"
      onSubmit={login}
    />
  );
}

export default Login;
