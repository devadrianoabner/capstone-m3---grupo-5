// fazer os imports
import { createContext, useContext, useState } from "react";

// criar o context
export const UserContext = createContext();

// criar o provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@HDR:user")) || ""
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
