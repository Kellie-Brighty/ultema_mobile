import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [registered, setRegistered] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ user, registered, setUser, setRegistered }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
