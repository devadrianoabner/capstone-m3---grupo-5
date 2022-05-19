// fazer os imports
import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useToken } from "../token";
import { useUser } from "../user";

// criar o context
export const DietsContext = createContext();

// criar o provider
export const DietsProvider = ({ children }) => {
  const [diets, setDiets] = useState([]);
  const { token } = useToken();
  const { user, refreshUser } = useUser();

  const refreshDiet = () => {
    api
      .get("diets", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDiets(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    refreshDiet();
  }, [token]);

  useEffect(() => {
    refreshUser();
  }, [diets]);

  const removeDiet = (dietId) => {
    api
      .delete(`diets/${dietId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        refreshDiet();
      })
      .catch((e) => console.log(e));
  };

  const addDiet = (data) => {
    const { id } = user;

    const newDiet = {
      ...data,
      clientId: id,
      cookId: 0,
      status: false,
      price: 0,
      edit: true,
    };
    api
      .post("diets", newDiet, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        refreshDiet();
      })
      .catch((err) => console.log(err));
  };

  const modifyDiet = (data, dietId) => {
    api
      .patch(`diets/${dietId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        refreshDiet();
      })
      .catch((err) => console.log(err));
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

  const postProposals = (data, dietId, cookId, clientId) => {
    let { message, price } = data;
    price = Number(price.replace("R$ ", "").replace(",", "."));
    const newProposal = {
      clientId: clientId,
      message,
      price,
      status: false,
      dietId,
      cookId,
    };
    api
      .post("proposals", newProposal, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        api
          .patch(
            `diets/${dietId}`,
            {
              edit: false,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            sendNotification(
              {
                message: `${user.name} enviou uma proposta para você`,
                seen: false,
                url: "/proposals-clients",
              },
              clientId
            );
            refreshDiet();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const sendNotification = (notif, id) => {
    api
      .get(`users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        api.patch(
          `users/${id}`,
          { notifications: [notif, ...res.data.notifications] },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      })
      .catch((e) => console.log(e));
  };

  const cancelByCooker = (dietId, clientId) => {
    const cancelCooker = {
      cookId: 0,
      status: false,
      price: 0,
      edit: true,
    };

    api
      .patch(`diets/${dietId}`, cancelCooker, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        sendNotification(
          {
            message: `${user.name} cancelou sua dieta`,
            seen: false,
            url: "/proposals-clients",
          },
          clientId
        );
        refreshDiet();
      })
      .catch((err) => console.log(err));
  };

  return (
    <DietsContext.Provider
      value={{
        diets,
        setDiets,
        refreshDiet,
        removeDiet,
        addDiet,
        modifyDiet,
        postProposals,
        cancelByCooker,
        sendNotification,
      }}
    >
      {children}
    </DietsContext.Provider>
  );
};

export const useDiets = () => useContext(DietsContext);
