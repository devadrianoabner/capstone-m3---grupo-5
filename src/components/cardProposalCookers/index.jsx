import { Center, VStack, Image, Text, HStack } from "@chakra-ui/react";
import ModalProposals from "../modalProposals";
import { useEffect, useState } from "react";
import api from "../../services";

export const CardProposalCookers = ({ diet }) => {
  const { description, id: dietId, clientId, price, status } = diet;

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
          <Image
            borderRadius={"50%"}
            maxW={"50px"}
            maxH={"50px"}
            w={"80%"}
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />

          <Text fontSize={"20px"} fontFamily={"body"}>
            Dieta {client.name} - id {dietId}
          </Text>
        </HStack>
        <VStack justifyContent="center" alignItems="center">
          <Text color={"black"} fontWeight={"bold"} fontSize={"13px"}>
            Descrição da dieta:
          </Text>
          <Text textAlign={"center"} color={"black"} fontSize={"13px"}>
            {description}
          </Text>

          <HStack py={"4"} w={"80%"} alignItems={"center"}>
            <ModalProposals description={description} dietId={dietId}>
              Fazer propostas
            </ModalProposals>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};
