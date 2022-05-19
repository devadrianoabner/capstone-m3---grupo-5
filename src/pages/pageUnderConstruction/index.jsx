import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Construction from "../../assets/img/underConstruction/imgConstruction.svg";
import { HeaderDefault } from "../../components/headerDefault";
import { useHistory } from "react-router-dom";

export const UnderConstruction = () => {
  const history = useHistory();

  return (
    <Flex direction={"column"} h="100vh">
      <Flex>
        <HeaderDefault />
      </Flex>

      <Flex
        bg="#acacac"
        justify="flex-start"
        direction={"column"}
        align={"center"}
        gap="10px"
      >
        <Flex
          align={"center"}
          direction={"column"}
          justify="center"
          gap={["15px", "50px"]}
          mt={["10px", "50px"]}
        >
          <Flex direction={"column"} align={"center"}>
            <Text fontSize={"40px"}>Em construção</Text>
            <Button w="80px" onClick={history.goBack}>
              Voltar
            </Button>
          </Flex>

          <Text align={"center"} justify="center">
            Oops, parece que você está tentando acessar uma página em construção
          </Text>
        </Flex>
        <Flex>
          <Image w="600px" src={Construction} />
        </Flex>
      </Flex>
    </Flex>
  );
};
