import { Button, Center, VStack, Image, Text, HStack } from "@chakra-ui/react";

const CardProposal = () => {
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
            Lindsey James
          </Text>
        </HStack>
        <VStack justifyContent="center" alignItems="center">
          <Text color={"black"} fontWeight={"bold"} fontSize={"13px"}>
            Título da dieta
          </Text>
          <Text textAlign={"center"} color={"black"} fontSize={"13px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </Text>

          <HStack py={"4"} w={"80%"} alignItems={"center"}>
            <Button
              fontSize={"sm"}
              borderRadius="8px"
              maxH={"30px"}
              bg={"#A69C5D"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Ver propostas
            </Button>
            <Button
              fontSize={"sm"}
              maxH={"30px"}
              borderRadius="8px"
              isCentered
              bg={"#6c663F"}
              color={"white"}
              _focus={{
                bg: "gray.500",
              }}
            >
              Excluir
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};
export default CardProposal;
