import { MainAllProposals } from "../mainAllProposals";
import { Header } from "../HeaderDashboard";
import { AsideCozinheiro } from "../asideCozinheiro";
import { Footer } from "../../components/Footer";
import { Flex, Box, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/user/index";

export const IndexAllProposals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  const history = useHistory();

  if (user.type === "Usuário") {
    return history.push("/dashboard");
  }

  return (
    <Box>
      <Box h="10vh">
        <Header onOpen={onOpen} />
      </Box>
      <Box>
        <Flex h="90vh">
          <Box w={["0vw", "0vw", "0vw", "0vw", "20vw", "15vw"]}>
            <AsideCozinheiro
              onOpen={onOpen}
              isOpen={isOpen}
              onClose={onClose}
            />
          </Box>
          <Box
            w={["100vw", "100vw", "100vw", "100vw", "80vw", "85vw"]}
            ml={["10px", "10px", "15px", "25px", "37px"]}
            mr={["10px", "10px", "15px", "25px", "37px"]}
          >
            <MainAllProposals />
          </Box>
        </Flex>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
