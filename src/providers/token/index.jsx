// fazer os imports
import { createContext, useContext, useEffect, useState } from "react";

// criar o context
export const TokenContext = createContext();

// criar o provider
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@HDR:token")) || ""
  );

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(token);
  }, [token]);

  return (
    <TokenContext.Provider
      value={{ token, setToken, authenticated, setAuthenticated }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
