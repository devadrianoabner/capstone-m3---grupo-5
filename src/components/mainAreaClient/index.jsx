import Banner from "../banner";
import { CardDashboard } from "../cardDashboard";
import { Box, Flex } from "@chakra-ui/react";
import BannerImg from "../../assets/img/client/imgBannerCliente.png";
import DuboutsImg from "../../assets/img/client/imgDoubtsCliente.png";
import InfoImg from "../../assets/img/client/imgInfoClient.png";
import RequestImg from "../../assets/img/client/imgRequestClient.png";
import VewRequestImg from "../../assets/img/client/imgVewResquests.png";

const MainAreaClient = () => {
  return (
    <Box w="100%">
      <Flex flexDirection="column">
        <Banner
          bg="#F0DC5B
          "
          title="Seja bem vindo a sua Dashboard!"
          decpripTion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          img={BannerImg}
        />

        <Flex
          w="100%"
          flexWrap="nowrap"
          mt={["15px", "15px", "20px", "30px", "30px"]}
        >
          <Box w="100%" mr={["3px", "5px", "5px", "15px"]}>
            <CardDashboard
              modal
              bg="#BDAD48
            "
              title="Solicitar um novo pedido"
              decpripTion="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. "
              buttonText="Fazer pedido"
              buttonColor="#706B4C"
              img={DuboutsImg}
            />
          </Box>

          <Box w="100%" ml={["3px", "5px", "5px", "15px"]}>
            <CardDashboard
              bg="#5FDD9F"
              title="Visualizar pedidos"
              decpripTion="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. "
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
          mt={["15px", "15px", "20px", "30px", "30px"]}
        >
          <Box w="100%" mr={["3px", "5px", "5px", "15px"]}>
            <CardDashboard
              bg="#F0DC5B"
              title="Tem dúvidas?"
              decpripTion="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. "
              buttonText="Fazer propostas"
              buttonColor="#706B4C"
              img={RequestImg}
            />
          </Box>

          <Box w="100%" ml={["3px", "5px", "5px", "15px"]}>
            <CardDashboard
              bg="#F2E8A5"
              title="Não sabe o que pedir?"
              decpripTion="Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. "
              buttonText="Ver sugestões"
              buttonColor="#666363"
              img={VewRequestImg}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainAreaClient;
