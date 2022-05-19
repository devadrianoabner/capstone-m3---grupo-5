import {
  Center,
  VStack,
  Image,
  Text,
  HStack,
  Avatar,
  Box,
} from "@chakra-ui/react";
import ModalProposals from "../modalProposals";
import { useEffect, useState } from "react";
import api from "../../services";

export const CardProposalCookers = ({ diet }) => {
  const { description, id: dietId, clientId, price, status, meal } = diet;

  const [client, setClient] = useState({});

  useEffect(() => {
    api
      .get(`/users/${clientId}`)
      .then((res) => setClient(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Center maxW={"350px"} w={"100%"} py={2}>
      <VStack
        borderRadius="8px"
        w={["70%", "100%"]}
        h={"100%"}
        direction={{ base: "column", md: "row" }}
        bg={("white", "#D9D9D9")}
        justify="space-between"
      >
        <HStack
          w={"80%"}
          borderBottom={"1px"}
          spacing={"5"}
          py={"3"}
          justifyContent={"center"}
        >
          <Avatar
            borderRadius={"50%"}
            maxW={"40px"}
            maxH={"40px"}
            w={"80%"}
            name={client.name}
            bgColor={"#D8E9BC"}
            src={client.avatarUrl}
          />

          <Text fontSize={"20px"} fontFamily={"body"}>
            {client.name} - {dietId}
          </Text>
        </HStack>
        <VStack justifyContent="space-between" alignItems="center" flexGrow="2">
          <Text color={"black"} fontWeight={"bold"} fontSize={"13px"}>
            Descrição da dieta:
          </Text>
          <Text
            pl="15px"
            pr="15px"
            textAlign={"center"}
            color={"black"}
            fontSize={"13px"}
          >
            {description}
          </Text>
          <Box bgColor="#000" h="1px" w="100px" />
          <Box mt="20px">
            <Text fontSize="12px">Restrição de dieta:</Text>
            <Text fontSize="12px" fontWeight="bold">
              {meal}
            </Text>
          </Box>
        </VStack>
        <HStack py={"4"} w={"80%"} justifyContent={"center"}>
          <ModalProposals
            description={description}
            dietId={dietId}
            clientId={clientId}
            meal={meal}
          >
            Fazer propostas
          </ModalProposals>
        </HStack>
      </VStack>
    </Center>
  );
};
