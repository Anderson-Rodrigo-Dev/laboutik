import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

const getSessionStorageOrDefault = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
};

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [isLogged, setIsLogged] = useState(
    getSessionStorageOrDefault("user", false)
  );

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(isLogged));
    setUserName(sessionStorage.getItem("userName"));
  }, [isLogged]);

  return (
    <UserContext.Provider
      value={{ isLogged, setIsLogged, userName, setUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    console.log("Context not found!");
  }

  return context;
};
