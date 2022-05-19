// fazer os imports
import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useDiets } from "../diets";
import { useToken } from "../token";

// criar o context
export const UserContext = createContext();

// criar o provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@HDR:user")) || ""
  );

  const refreshUser = () => {
    api
      .get(`users/${user.id}`)
      .then((res) => setUser(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
