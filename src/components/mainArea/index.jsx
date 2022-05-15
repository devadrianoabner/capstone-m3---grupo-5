import Banner from "../banner";
import { CardDashboard } from "../cardDashboard";
import { CardContador } from "../cardContador";
import { Flex } from "@chakra-ui/react";

import imagem1 from "../../assets/imgDashboardPrestador/computador.svg";
import imagem2 from "../../assets/imgDashboardPrestador/propostas.svg";
import imagem3 from "../../assets/imgDashboardPrestador/dinheiro.svg";
import imagem4 from "../../assets/imgDashboardPrestador/homem-de-negocio.svg";
import imagem5 from "../../assets/imgDashboardPrestador/culinaria.svg";

export const MainArea = () => {
  return (
    <>
      <Flex flexDirection="column" maxW="1440" align="center" justify="center">
        <Banner bg="" title="" decpripTion="" img={""} />
        <Flex w="100%" flexWrap="nowrap" justify="center">
          <CardContador bg="" title="" decpripTion="" bgCount="" img="" />
          <CardContador bg="" title="" decpripTion="" bgCount="" img="" />
        </Flex>
        <Flex w="100%" flexWrap="nowrap" justify="center">
          <CardDashboard
            bg=""
            title=""
            decpripTion=""
            buttonText=""
            buttonColor=""
            img=""
          />
          <CardDashboard
            bg=""
            title=""
            decpripTion=""
            buttonText=""
            buttonColor=""
            img=""
          />
        </Flex>
      </Flex>
    </>
  );
};
