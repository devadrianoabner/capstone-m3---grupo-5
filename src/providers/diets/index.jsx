// fazer os imports
import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useToken } from "../token";

// criar o context
export const DietsContext = createContext();

// criar o provider
export const DietsProvider = ({ children }) => {
  const [diets, setDiets] = useState([]);
  const { token } = useToken([]);

  useEffect(() => {
    api
      .get("diets", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDiets(res.data))
      .catch((e) => console.log(e));
  }, []);

  const refreshDiet = () => {
    api
      .get("diets", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDiets(res.data))
      .catch((e) => console.log(e));
  };

  const removeDiet = (dietId) => {
    api
      .delete(`diets/${dietId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => refreshDiet())
      .catch((e) => console.log(e));
  };

  const removeAllProposalsforDiet = (dietId) => {
    api // GET DAS PROPOSTA DA DIETA ESPECIFICADA, DEPOIS FAZ MAP COM CADA PROPOSTA PARA DELETAR NA API
      .get(`/proposals?diedId=${dietId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) =>
        res.data.map((proposal) =>
          api
            .delete(`/proposals/${proposal.id}`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => res)
            .catch((e) => console.log(e))
        )
      )
      .catch((e) => console.log(e));
  };

  return (
    <DietsContext.Provider value={{ diets, setDiets, refreshDiet, removeDiet }}>
      {children}
    </DietsContext.Provider>
  );
};

export const useDiets = () => useContext(DietsContext);
