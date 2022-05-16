import { Text, VStack, SimpleGrid, Center, Box } from "@chakra-ui/react";
import { CardProposalCookers } from "../cardProposalCookers";

export const MainAreaProposalCookers = () => {
  return (
    <Box>
      <Box>
        <Text spacing={"8px"} w={"100%"} fontSize={"30px"}>
          Aceitar novas propostas
        </Text>
        <Text
          spacing={"8px"}
          w={"100%"}
          maxW={"600px"}
          fontFamily={"Inter"}
          fontSize={"20px"}
          mt="15px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </Text>
      </Box>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={[2]} mt="25px">
        <CardProposalCookers />
        <CardProposalCookers />
        <CardProposalCookers />
        <CardProposalCookers />
        <CardProposalCookers />
        <CardProposalCookers />
      </SimpleGrid>
    </Box>
  );
};
