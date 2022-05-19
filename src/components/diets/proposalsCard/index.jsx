import { Avatar, Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDiets } from "../../../providers/diets";
import { useToken } from "../../../providers/token";
import api from "../../../services";
import { ButtonConfirmAcceptence } from "../buttonConfirmAcceptence";

export const ProposalCard = ({ proposal, proposals, onClose }) => {
  const { dietId, clientId, price, cookId, message, status, id } = proposal;

  const { refreshDiet, sendNotification } = useDiets();

  const [cook, setCook] = useState({});
  const [client, setClient] = useState({});

  const { token } = useToken();

  useEffect(() => {
    api
      .get(`/users/${cookId}`)
      .then((res) => setCook(res.data))
      .catch((e) => console.log(e));

    api
      .get(`/users/${clientId}`)
      .then((res) => setClient(res.data))
      .catch((e) => console.log(e));
  }, []);

  console.log(cook);

  const acceptedOffer = () => {
    api // PATCH DIETA P ACEITA  STATUS TRUE, PRICE, AND COOK ID
      .patch(
        `/diets/${dietId}`,
        {
          status: "true",
          cookId: cookId,
          price: price,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((e) => console.log(e));

    api // PATCH COOK ID COM +1 ACCEPTED
      .patch(
        `/users/${cookId}`,
        {
          qntAccepted: cook.qntAccepted + 1,
          revenue: cook.revenue + price,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((e) => console.log(e));

    api // PATCH  CLIENT ID COM +1 ACCEPTED
      .patch(
        `/users/${clientId}`,
        {
          qntAccepted: client.qntAccepted + 1,
          spent: client.spent + price,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((e) => console.log(e));

    proposals // DELETAR PROPOSTA ACEITA
      .filter((proposal) => proposal.id === id)
      .map((proposal) =>
        api
          .delete(`/proposals/${proposal.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .catch((e) => console.log(e))
      );

    proposals // ITERACAO DE PROPOSTAS RECUSADAS PARA ADC REJECTED E DELETAR
      .filter((proposal) => proposal.id !== id)
      .map(async (proposal) => {
        // MAP NO ARRAY DE PROPOSTAS FILTRADO

        const rejectedCook = await api
          .get(`/users/${proposal.cookId}`)
          .then((res) => res.data)
          .catch((e) => console.log(e));

        api // PATCH PARA ADC REJECTED
          .patch(
            `/users/${proposal.cookId}`,
            {
              qntRejected: rejectedCook.qntRejected + 1,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .catch((e) => console.log(e));

        return api // DELETAR PROPOSTAS RECUSADAS
          .delete(`/proposals/${proposal.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .catch((e) => console.log(e));
      });
    sendNotification(
      {
        message: `${client.name} aceitou a sua proposta`,
        seen: false,
        url: "/cook-accepted-proposals",
      },
      cookId
    );
    refreshDiet();
    onClose();
  };

  return (
    <Flex
      minW="125px"
      p="8px"
      m="10px 20px"
      direction="row"
      align="center"
      justify="flex-start"
      border="1px solid grey"
      borderRadius="15px"
    >
      <Flex m="1" minW="125px" direction="column" align="center">
        <Avatar name={cook.name} />
        <Box>
          <Icon as={AiFillStar} color="#FFC727" size="30px" />
          <Icon as={AiFillStar} color="#FFC727" size="30px" />
          <Icon as={AiFillStar} color="#FFC727" size="30px" />
          <Icon as={AiFillStar} color="#FFC727" size="30px" />
          <Icon as={AiFillStar} color="#FFC727" size="30px" />
        </Box>
        <Text fontSize="15">{cook.name}</Text>
      </Flex>
      <Flex direction="column">
        <Text fontWeight="bold">Descrição da proposta:</Text>
        <Text>{message}</Text>
        <Flex>
          <Box mt="20px">
            <Text fontWeight="bold">Valor da dieta:</Text>
            <Text fontWeight="bold">
              R$ {price.toFixed(2).replace(".", ",")}
            </Text>
          </Box>
          <ButtonConfirmAcceptence
            acceptedOffer={acceptedOffer}
            cook={cook}
            price={price}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
