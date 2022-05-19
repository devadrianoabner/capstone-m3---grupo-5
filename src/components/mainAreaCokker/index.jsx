import Banner from "../banner";
import { CardDashboard } from "../cardDashboard";
import { CardContador } from "../cardContador";
import { Flex, Box } from "@chakra-ui/react";

import imagem1 from "../../assets/imgDashboardPrestador/computador.svg";
import imagem2 from "../../assets/imgDashboardPrestador/propostas.svg";
import imagem3 from "../../assets/imgDashboardPrestador/dinheiro.svg";
import imagem4 from "../../assets/imgDashboardPrestador/homem-de-negocio.svg";
import imagem5 from "../../assets/imgDashboardPrestador/culinaria.svg";

export const MainAreaCooker = ({ faturamento, concluidos }) => {
  return (
    <Box w="100%" h="100%">
      <Flex flexDirection="column">
        <Box h={["20vh", "25vh", "35vh"]}>
          <Banner
            bg="#F0DC5B"
            title="Seja bem vindo a sua Dashboard!"
            decpripTion="Aqui é seu painel administrativo, você poderá realizar novas propostas aos clientes e visualizar suas propostas aceitas e faturamento!"
            img={imagem1}
          />
        </Box>

        <Box h={["45vh", "45vh", "50vh"]}>
          <Flex
            w="100%"
            flexWrap="nowrap"
            mt={["10px", "12px", "15px", "18px", "20px"]}
            h="45%"
          >
            <Box w="100%" mr={["3px", "5px", "5px", "10px"]}>
              <CardContador
                bg="#BDAD48"
                title="Propostas aceitas"
                decpripTion={concluidos}
                bgCount="#F0DC5B
            "
                img={imagem2}
              />
            </Box>

            <Box w="100%" ml={["3px", "5px", "5px", "10px"]}>
              <CardContador
                bg="#5FDD9F"
                title="Seu faturamento"
                decpripTion={faturamento}
                bgCount="#43B07B
            "
                img={imagem3}
                type="true"
              />
            </Box>
          </Flex>
          <Flex
            h="45%"
            w="100%"
            flexWrap="nowrap"
            mt={["10px", "12px", "15px", "18px", "20px"]}
          >
            <Box w="100%" mr={["3px", "5px", "5px", "10px"]}>
              <CardDashboard
                bg="#F0DC5B"
                title="Fazer novos negócios"
                decpripTion="Veja as dietas que estão disponíveis para propostas!"
                buttonText="Fazer propostas"
                buttonColor="#706B4C"
                linkBtn={"/proposals-cookers"}
                img={imagem4}
              />
            </Box>

            <Box w="100%" ml={["3px", "5px", "5px", "10px"]}>
              <CardDashboard
                bg="#F2E8A5"
                title="Acessar cursos"
                decpripTion="Parabéns, você ganhou um curso de culinária para se especializar!"
                buttonText="Acessar"
                buttonColor="#666363"
                img={imagem5}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
