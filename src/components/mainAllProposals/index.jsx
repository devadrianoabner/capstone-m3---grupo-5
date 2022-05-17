import { Text, Image, Box, Flex } from "@chakra-ui/react";
import { CardAllProposals } from "../cardAllProposals";
import analitcs from "../../assets/imgIndexAllProposals/analitcs.svg";

export const MainAllProposals = () => {
  return (
    <Box w="75vw">
      <Flex>
        <Box ml="2vw" mr="2vw" w={["100vw", "100vw", "100vw", "50vw"]}>
          <Flex direction="column">
            <Text spacing={"8px"} w={"100%"} fontSize={"30px"}>
              Aceitar novas propostas
            </Text>
            <Text
              mt="10px"
              spacing={"8px"}
              w={"100%"}
              maxW={"571px"}
              fontFamily={"Inter"}
              fontSize={"20px"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </Text>
            <CardAllProposals />
            <CardAllProposals />
            <CardAllProposals />
            <CardAllProposals />
            <CardAllProposals />
          </Flex>
        </Box>
        <Box
          w={["100vw", "100vw", "50vw", "30vw"]}
          display={["none", "none", "none", "flex"]}
        >
          <Flex justifyContent="center">
            <Image src={analitcs} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
