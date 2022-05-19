import { MainAreaProposal } from "../mainAreaProposal";
import { Header } from "../../components/HeaderDashboard";
import { AsideCliente } from "../asideCliente";

import { Flex, Box, useDisclosure } from "@chakra-ui/react";

export const IndexProposalClients = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box h="12vh">
        <Header onOpen={onOpen} />
      </Box>

      <Box>
        <Flex h="90vh">
          <Box w={["0vw", "0vw", "0vw", "0vw", "20vw", "15vw"]}>
            <AsideCliente isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          </Box>

          <Box
            w={["100vw", "100vw", "100vw", "100vw", "80vw", "85vw"]}
            ml={["10px", "10px", "15px", "25px", "37px"]}
            mr={["10px", "10px", "15px", "25px", "37px"]}
          >
            <MainAreaProposal />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
