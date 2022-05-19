import { BannerClient } from "../bannerClient";
import { CardDashboard } from "../cardDashboard";
import { Box, Flex } from "@chakra-ui/react";
import BannerImg from "../../assets/img/client/imgBannerCliente.png";
import DuboutsImg from "../../assets/img/client/imgDoubtsCliente.png";
import InfoImg from "../../assets/img/client/imgInfoClient.png";
import RequestImg from "../../assets/img/client/imgRequestClient.png";
import VewRequestImg from "../../assets/img/client/imgVewResquests.png";

const MainAreaClient = () => {
  return (
    <Box w="100%" h="100%">
      <Flex flexDirection="column">
        <Box h={["20vh", "25vh", "35vh"]}>
          <BannerClient
            bg="#F0DC5B
          "
            title="Seja bem vindo a sua Dashboard!"
            decpripTion="Aqui é seu painel administrativo, você poderá solicitar novas dietas, receber propostas de nossos cozinheiros e aceitar propostas!"
            img={BannerImg}
            display={["none", "flex", "flex"]}
          />
        </Box>
        <Box h={["45vh", "45vh", "50vh"]}>
          <Flex
            w="100%"
            justify="center"
            flexWrap="nowrap"
            mt={["10px", "12px", "15px", "18px", "20px"]}
            h="45%"
          >
            <Box w="100%" mr={["3px", "5px", "5px", "10px"]}>
              <CardDashboard
                modal
                bg="#BDAD48
            "
                title="Novo pedido"
                decpripTion="Clique no botão para montar uma nova dieta! "
                buttonText="Fazer pedido"
                buttonColor="#706B4C"
                img={DuboutsImg}
              />
            </Box>

            <Box w="100%" ml={["3px", "5px", "5px", "10px"]}>
              <CardDashboard
                bg="#5FDD9F"
                title="Visualizar pedidos"
                decpripTion="Clique no botão para ver todas as suas dietas! "
                buttonText="Ver tudo"
                buttonColor="#43B07B"
                img={InfoImg}
                linkBtn="/proposals-clients"
              />
            </Box>
          </Flex>

          <Flex
            w="100%"
            flexWrap="nowrap"
            mt={["10px", "12px", "15px", "18px", "20px"]}
          >
            <Box w="100%" mr={["3px", "5px", "5px", "10px"]}>
              <CardDashboard
                bg="#F0DC5B"
                title="Tem dúvidas?"
                decpripTion="Se estiver com dificuldades sobre nosso sistema clique aqui! "
                buttonText="Suporte"
                buttonColor="#706B4C"
                img={RequestImg}
              />
            </Box>

            <Box w="100%" ml={["3px", "5px", "5px", "10px"]}>
              <CardDashboard
                bg="#F2E8A5"
                title="Sugestões de dietas"
                decpripTion="Temos algumas sugestões de dietas para você!"
                buttonText="Ver sugestões"
                buttonColor="#666363"
                img={VewRequestImg}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainAreaClient;
