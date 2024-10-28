import { useAuth0 } from "@auth0/auth0-react";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useAuth = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    error
  } = useAuth0();
  const { setUser, logout: storeLogout } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && user) {
      setUser(user);
    }else if (error) {
      toast.error(error.message);
    }
  }, [isAuthenticated, user, setUser]);

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: window.location.origin },
    });
    storeLogout();
    toast.info("You've logged out.");
  };

  const handleUnauthorizedAction = () => {
    if (!isAuthenticated) {
      toast.warn("Please log in to access this feature.");
    }
  };

  return {
    handleLogin,
    handleLogout,
    handleUnauthorizedAction,
    isAuthenticated,
    user,
  };
};
