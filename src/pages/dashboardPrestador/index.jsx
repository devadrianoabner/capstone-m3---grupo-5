import { Header } from "../../components/HeaderDashboard";
import { MainAreaCooker } from "../../components/mainAreaCokker";
import { AsideCozinheiro } from "../../components/asideCozinheiro";
import { Footer } from "../../components/Footer";
import { useHistory } from "react-router-dom";
import { Flex, Box, useDisclosure, Button, Text } from "@chakra-ui/react";
import { useUser } from "../../providers/user/index";

export const DashboardPrestador = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  const history = useHistory();

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
              user={user.name}
            />
          </Box>

          <Box
            w={["100vw", "100vw", "100vw", "100vw", "80vw", "80vw"]}
            ml={["10px", "10px", "15px", "25px", "37px"]}
            mr={["10px", "10px", "15px", "25px", "37px"]}
          >
            <MainAreaCooker
              concluidos={user.qntAccepted}
              faturamento={user.revenue}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
