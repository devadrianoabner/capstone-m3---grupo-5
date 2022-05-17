import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import { MainAllProposalsCook } from "../../components/cookerAcceptedProposals/mainAllProposalsCook";
import { Header } from "../../components/HeaderDashboard";
import { useUser } from "../../providers/user";

import { AsideCozinheiro } from "../../components/asideCozinheiro";

export const CookAcceptedProposals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useUser();

  return (
    <Box>
      <Box h="10vh">
        <Header onOpen={onOpen} />
      </Box>
      <Box>
        <Flex h="90vh">
          <Box w={["0vw", "0vw", "0vw", "0vw", "20vw", "15vw"]}>
            <AsideCozinheiro
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </Box>

          <Box
            w={["100vw", "100vw", "100vw", "100vw", "80vw", "85vw"]}
            ml={["10px", "10px", "15px", "25px", "37px"]}
            mr={["10px", "10px", "15px", "25px", "37px"]}
          >
            <MainAllProposalsCook />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
