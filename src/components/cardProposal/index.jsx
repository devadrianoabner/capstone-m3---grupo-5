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
    finished,
    address,
    meal,
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
    <Center maxW={"350px"} w={"100%"} minH="100%" py={"8px"} minW="250px">
      <VStack
        borderRadius="8px"
        p="5px"
        w={"90%"}
        minH={"100%"}
        direction={{ base: "column", md: "row" }}
        bg={("white", "#D9D9D9")}
        justify="space-between"
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
            name={client.name}
            bgColor={"#D8E9BC"}
            src={client.avatarUrl}
          />

          <Text fontSize={"20px"} fontFamily={"body"}>
            {client.name}
          </Text>
        </HStack>
        <VStack justifyContent="flex-start" alignItems="center" flexGrow="2">
          <Text color={"black"} fontWeight={"bold"} fontSize={"13px"}>
            Descrição da dieta:
          </Text>
          <Text textAlign={"center"} color={"black"} fontSize={"13px"}>
            {description}
          </Text>
        </VStack>
        <Box bgColor="#000" h="1px" w="120px" />

        <Box mt="20px">
          <Text fontSize="12px">Restrição de dieta:</Text>
          <Text fontSize="12px" fontWeight="bold">
            {meal}
          </Text>
        </Box>
        {!status ? (
          <HStack py={"4"} w={"80%"} justify={"center"}>
            {edit ? (
              <ModalEdit dietId={dietId} description={description} />
            ) : (
              <ModalViewProposal dietId={dietId} />
            )}
            <ButtonConfirmDelete removeDiet={removeDiet} dietId={dietId} />
          </HStack>
        ) : !finished ? (
          <Box w="90%" pb="8px">
            <Text fontWeight="bold">
              Você escolheu um cozinheiro para essa dieta!
            </Text>
            <Text>Cozinheiro: {cook.name}</Text>
            <Text fontWeight="bold">
              Valor: R${price.toFixed(2).replace(".", ",")}
            </Text>
          </Box>
        ) : (
          <Box>
            <Text fontWeight="bold">Pedido finalizado.</Text>
            <Text fontWeight="bold">Local de retirada: {address}</Text>
          </Box>
        )}
      </VStack>
    </Center>
  );
};
export default CardProposal;
