import { Text, VStack, SimpleGrid, Center, Box, Flex } from "@chakra-ui/react";
import { CardProposalCookers } from "../cardProposalCookers";
import { useDiets } from "../../providers/diets";

export const MainAreaProposalCookers = () => {
  const { diets } = useDiets();

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
              Aceitar novas propostas
            </Text>
            <Text
              spacing={"8px"}
              w={"100%"}
              maxW={"571px"}
              fontFamily={"Inter"}
              fontSize={["13px", "15px", "18px", "20px"]}
            >
              Essas são as dietas disponíveis no momento, faça a sua melhor
              oferta!
            </Text>
          </VStack>
          <SimpleGrid columns={[1, 2, 3]} spacing={[3, 5, 10]}>
            {diets.map((diet) => {
              return <CardProposalCookers diet={diet} />;
            })}
          </SimpleGrid>
        </VStack>
      </Flex>
    </Box>
  );
};
