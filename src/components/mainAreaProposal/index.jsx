import {
  Text,
  VStack,
  SimpleGrid,
  Center,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useDiets } from "../../providers/diets";
import { useUser } from "../../providers/user";
import CardProposal from "../cardProposal";

export const MainAreaProposal = () => {
  const { diets } = useDiets();
  const { user } = useUser();
  return (
    <Box h="100%" overflowY="scroll">
      <Flex>
        <VStack w={["90%", "auto"]}>
          <VStack alignItems={"flex-start"} w={"100%"}>
            <Text
              spacing={"8px"}
              w={"100%"}
              fontFamily={"Inter"}
              fontWeight="600"
              fontSize={["25px", "25px", "25px", "30px"]}
            >
              Suas Dietas
            </Text>
            <Text
              spacing={"8px"}
              w={"100%"}
              maxW={"700px"}
              fontFamily={"Inter"}
              fontSize={["13px", "15px", "18px", "20px"]}
            >
              Aqui você encontra as suas dietas inseridas e como está o
              andamento de cada uma delas! Você pode editar suas dietas,
              visualizar as propostas das suas dietas e excluir as dietas que
              desejar.
            </Text>
          </VStack>
          <SimpleGrid columns={[1, 2, 3]} spacing={[3, 5, 8]}>
            {diets
              .filter((dieta) => dieta.clientId === user.id)
              .map((diet) => (
                <CardProposal diet={diet} />
              ))}
          </SimpleGrid>
        </VStack>
      </Flex>
    </Box>
  );
};
