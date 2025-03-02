import Keycloak from "keycloak-js";
import { useEffect, useRef, useState } from "react";

function useAuth() {
  const isPrivate = useRef(false);
  const [isLoging, setIsLoging] = useState(false);

  useEffect(() => {
    if (isPrivate.current) return;
    isPrivate.current = true;

    const client = new Keycloak({
      url: "http://localhost:8080/",
      realm: "learning",
      clientId: "myClient",
    });

    client
      .init({ onLoad: "login-required" })
      .then((res) => {
        console.log("Keycloak initialized successfully:", res);
        setIsLoging(true);
      })
      .catch((err) => {
        console.error("Keycloak initialization failed:", err);
      });
  }, []);

  return isLoging;
}

export default useAuth;