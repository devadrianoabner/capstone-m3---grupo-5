// fazer os imports
import { createContext, useContext, useState } from "react";

// criar o context
export const TokenContext = createContext();

// criar o provider
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@HDR:token")) || ""
  );

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
