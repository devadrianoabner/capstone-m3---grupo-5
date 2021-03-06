import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { MainAllProposalsCook } from "../../components/cookerAcceptedProposals/mainAllProposalsCook";
import { Header } from "../../components/HeaderDashboard";
import { useUser } from "../../providers/user";
import { AsideCozinheiro } from "../../components/asideCozinheiro";
import { useHistory } from "react-router-dom";
import { useToken } from "../../providers/token";
import { Redirect } from "react-router-dom";

export const CookAcceptedProposals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  const { authenticated } = useToken();
  const history = useHistory();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  if (user.type === "Usuário") {
    return history.push("/dashboard");
  }

  return (
    <Box>
      <Box h="12vh">
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
