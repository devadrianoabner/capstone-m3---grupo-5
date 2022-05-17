import Banner from "../banner";
import { CardDashboard } from "../cardDashboard";
import { CardContador } from "../cardContador";
import { Flex, Box } from "@chakra-ui/react";

import imagem1 from "../../assets/imgDashboardPrestador/computador.svg";
import imagem2 from "../../assets/imgDashboardPrestador/propostas.svg";
import imagem3 from "../../assets/imgDashboardPrestador/dinheiro.svg";
import imagem4 from "../../assets/imgDashboardPrestador/homem-de-negocio.svg";
import imagem5 from "../../assets/imgDashboardPrestador/culinaria.svg";

export const MainAreaCooker = () => {
  return (
    <Box w="100%">
      <Flex flexDirection="column">
        <Banner
          bg="#F0DC5B"
          title="Seja bem vindo a sua Dashboard!"
          decpripTion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          img={imagem1}
        />

        <Flex
          w="100%"
          flexWrap="nowrap"
          mt={["15px", "15px", "20px", "30px", "30px"]}
        >
          <Box w="100%" mr={["3px", "5px", "5px", "15px"]}>
            <CardContador
              bg="#BDAD48"
              title="Propostas aceitas"
              decpripTion="0"
              bgCount="#F0DC5B
            "
              img={imagem2}
            />
          </Box>

          <Box w="100%" ml={["3px", "5px", "5px", "15px"]}>
            <CardContador
              bg="#5FDD9F"
              title="Seu faturamento"
              decpripTion="R$1500,00"
              bgCount="#43B07B
            "
              img={imagem3}
            />
          </Box>
        </Flex>
        <Flex
          w="100%"
          flexWrap="nowrap"
          mt={["15px", "15px", "20px", "30px", "30px"]}
        >
          <Box w="100%" mr={["3px", "5px", "5px", "15px"]}>
            <CardDashboard
              bg="#F0DC5B"
              title="Fazer novos negócios"
              decpripTion="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt"
              buttonText="Fazer propostas"
              buttonColor="#706B4C"
              img={imagem4}
            />
          </Box>

          <Box w="100%" ml="15px" mb={["15px", "15px", "20px", "30px", "30px"]}>
            <CardDashboard
              bg="#F2E8A5"
              title="Acessar cursos"
              decpripTion="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt"
              buttonText="Acessar"
              buttonColor="#666363"
              img={imagem5}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
