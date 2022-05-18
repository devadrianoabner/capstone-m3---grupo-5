import { Header } from "../../components/HeaderDashboard";
import { MainAreaCooker } from "../../components/mainAreaCokker";
import { AsideCozinheiro } from "../../components/asideCozinheiro";
import { Footer } from "../../components/Footer";

import { Flex, Box, useDisclosure, Button, Text } from "@chakra-ui/react";

import { useUser } from "../../providers/user/index";

export const DashboardPrestador = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setUser } = useUser();
  console.log(user.notifications);
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
            <MainAreaCooker
              concluidos={user.qntAccepted}
              faturamento={user.revenue}
            />
          </Box>
        </Flex>
      </Box>
      <Box h="5vh">
        <Footer />
      </Box>
    </Box>
  );
};
