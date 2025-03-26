import { useState, useEffect, useCallback } from "react";
import { AUTH_TOKEN_KEY } from "@/gateway/auth";
import { verifyToken } from "@/utils/auth";

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    return token ? verifyToken(token) : false;
  });

  const checkAuth = useCallback(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const currentAuthStatus = token ? verifyToken(token) : false;
    setIsAuthenticated((prev) => {
      return prev !== currentAuthStatus ? currentAuthStatus : prev;
    });
  }, []);

  useEffect(() => {
    const events = ["storage"];

    for (const event of events) {
      window.addEventListener(event, checkAuth);
    }

    const intervalId = setInterval(checkAuth, 5 * 60 * 1000);

    return () => {
      for (const event of events) {
        window.removeEventListener(event, checkAuth);
      }
      clearInterval(intervalId);
    };
  }, [checkAuth]);

  return { isAuthenticated };
};
