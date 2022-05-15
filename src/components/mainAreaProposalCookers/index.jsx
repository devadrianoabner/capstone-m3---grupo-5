import { Text, VStack, SimpleGrid, Center } from "@chakra-ui/react";
import { CardProposalCookers } from "../cardProposalCookers";

export const MainAreaProposalCookers = () => {
  return (
    <Center w={["100vw"]} h={["auto"]}>
      <VStack w={["90%", "auto"]}>
        <VStack alignItems={"flex-start"} w={"100%"}>
          <Text spacing={"8px"} w={"100%"} fontSize={"30px"}>
            Aceitar novas propostas
          </Text>
          <Text
            spacing={"8px"}
            w={"100%"}
            maxW={"571px"}
            fontFamily={"Inter"}
            fontSize={"20px"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </Text>
        </VStack>
        <SimpleGrid columns={[1, 2, 3]} spacing={[3, 5, 10]}>
          <CardProposalCookers />
          <CardProposalCookers />
          <CardProposalCookers />
          <CardProposalCookers />
          <CardProposalCookers />
          <CardProposalCookers />
        </SimpleGrid>
      </VStack>
    </Center>
  );
};
