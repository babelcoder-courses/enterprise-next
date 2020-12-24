import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import useAuth from "./useAuth";
import * as uiActions from "modules/ui/actions";

function useRoleGuard(roles) {
  const dispatch = useDispatch();
  const router = useRouter();
  const profile = useAuth();

  const checkRole = () => {
    if (roles.includes(profile.role)) return;

    dispatch(
      uiActions.setFlashMessage(
        "error",
        "You are not allowed to access this page"
      )
    );
    router.push("/auth/login");
  };

  useEffect(() => {
    if (profile) checkRole();
  }, [profile]);
}

export default useRoleGuard;
