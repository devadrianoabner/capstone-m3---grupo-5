import { Avatar, Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDiets } from "../../providers/diets";
import api from "../../services";
import { ButtonConfirmDelete } from "../diets/buttonConfirmDelete";
import ModalEdit from "../ModalEdit/Index";
import ModalViewProposal from "../modalViewProposal";

const CardProposal = ({ diet }) => {
  const {
    id: dietId,
    clientId,
    description,
    status,
    cookId,
    price,
    edit,
  } = diet;

  const { removeDiet } = useDiets();

  const [client, setClient] = useState("");
  const [cook, setCook] = useState({});

  useEffect(() => {
    api
      .get(`/users/${clientId}`)
      .then((res) => setClient(res.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (cookId !== 0) {
      api
        .get(`/users/${cookId}`)
        .then((res) => setCook(res.data))
        .catch((e) => console.log(e));
    }
  }, [status]);

  console.log(client.name);
  return (
    <Center maxW={"350px"} w={"100%"} py={2}>
      <VStack
        borderRadius="8px"
        w={["88%", "100%"]}
        h={["100%", "auto"]}
        direction={{ base: "column", md: "row" }}
        bg={("white", "#D9D9D9")}
      >
        <HStack
          w={"80%"}
          borderBottom={"1px"}
          spacing={"5"}
          py={"3"}
          justifyContent={"space-between"}
        >
          <Avatar
            borderRadius={"50%"}
            maxW={"50px"}
            maxH={"50px"}
            w={"80%"}
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />

          <Text fontSize={"20px"} fontFamily={"body"}>
            Dieta do {client.name} - id {dietId}
          </Text>
        </HStack>
        <VStack justifyContent="center" alignItems="center">
          <Text color={"black"} fontWeight={"bold"} fontSize={"13px"}>
            Descrição da dieta:
          </Text>
          <Text textAlign={"center"} color={"black"} fontSize={"13px"}>
            {description}
          </Text>
          {!status ? (
            <HStack py={"4"} w={"85%"} alignItems={"center"}>
              {edit ? (
                <ModalEdit dietId={dietId} description={description} />
              ) : (
                <ModalViewProposal dietId={dietId} />
              )}
              <ButtonConfirmDelete removeDiet={removeDiet} dietId={dietId} />
            </HStack>
          ) : (
            <Box w="250px" pb="8px">
              <Text fontWeight="bold">
                Você escolheu já um cozinheiro para essa dieta!
              </Text>
              <Text>Cozinheiro: {cook.name}</Text>
              <Text fontWeight="bold">
                Valor: R${price.toFixed(2).replace(".", ",")}
              </Text>
            </Box>
          )}
        </VStack>
      </VStack>
    </Center>
  );
};
export default CardProposal;
