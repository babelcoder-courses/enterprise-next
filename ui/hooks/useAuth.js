import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function useAuth() {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => !!state.auth.accessToken);
  const profile = useSelector((state) => state.auth.profile);

  const checkAuth = () => {
    if (isLoggedIn) return;

    const tokenFromStorage = localStorage.getItem("access-token");

    if (!tokenFromStorage) router.push("/auth/login");
  };

  useEffect(() => {
    checkAuth();
  }, [isLoggedIn]);

  return profile;
}

export default useAuth;
