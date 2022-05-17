import { Footer } from "../../components/Footer";
import { Header } from "../../components/HeaderDashboard";
import { AsideDashboard } from "../../components/asideDashboard";
import MainAreaClient from "../../components/mainAreaClient";

import { Flex, Box, useDisclosure } from "@chakra-ui/react";

import imgPerfil from "../../assets/iconsDashboard/foto.svg";
import icon1 from "../../assets/iconsDashboard/iconHome.svg";
import icon2 from "../../assets/iconsDashboard/iconList.svg";
import icon3 from "../../assets/iconsDashboard/iconApertoDeMao.svg";
import icon4 from "../../assets/iconsDashboard/iconPergunta.svg";
import icon5 from "../../assets/iconsDashboard/iconSuporte.svg";

export const DashBoardClient = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box h="10vh">
        <Header onOpen={onOpen} />
      </Box>
      <Box>
        <Flex h="90vh">
          <Box w={["0vw", "0vw", "0vw", "0vw", "20vw", "15vw"]}>
            <AsideDashboard
              corBody="#A69C5D"
              fotoUser={imgPerfil}
              nomeUser="Paulinho best coach do agreste"
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              icon4={icon4}
              icon5={icon5}
              textIcon1="Dashboard"
              textIcon2="Fazer novo pedido"
              textIcon3="Ver dietas"
              textIcon4="Perguntas frequentes"
              textIcon5="Fale com a central"
              baseColor="#12120E"
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              link1="/dashboard"
              link2="/new-diet"
              link3="/proposals-clients"
            />
          </Box>

          <Box
            w={["100vw", "100vw", "100vw", "100vw", "80vw", "85vw"]}
            ml={["10px", "10px", "15px", "25px", "37px"]}
            mr={["10px", "10px", "15px", "25px", "37px"]}
          >
            <MainAreaClient />
          </Box>
        </Flex>
      </Box>
      <Box mt="40px">
        <Footer />
      </Box>
    </Box>
  );
};
