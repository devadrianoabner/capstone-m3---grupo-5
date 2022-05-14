import { Footer } from "../../components/Footer";
import { Header } from "../../components/HeaderDashboard";
import { AsideDashboard } from "../../components/asideDashboard";
import MainAreaClient from "../../components/mainAreaClient";
import AvatarUser from "../../assets/img/paulo.jfif";
import { Flex } from "@chakra-ui/react";

export const DashBoardClient = () => {
  return (
    <>
      <Flex direction="column">
        <Header />
        <Flex >
          <Flex maxW="28vw">
            <AsideDashboard
              corBody="#A69C5D"
              fotoUser={AvatarUser}
              nomeUser="Paulinho best coach do agreste"
              icon1=""
              icon2=""
              icon3=""
              icon4=""
              icon5=""
              textIcon1="Dashboard"
              textIcon2="Fazer novo pedido"
              textIcon3="Ver propostas"
              textIcon4="Perguntas frequentes"
              textIcon5="Fale com a central"
              baseColor="#12120E"
            />
          </Flex>
          <Flex w="90vw">
            <MainAreaClient />
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};
