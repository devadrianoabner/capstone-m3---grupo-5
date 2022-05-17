import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import imgPerfil from "../../assets/iconsDashboard/foto.svg";
import icon3 from "../../assets/iconsDashboard/iconApertoDeMao.svg";
import icon1 from "../../assets/iconsDashboard/iconHome.svg";
import icon2 from "../../assets/iconsDashboard/iconList.svg";
import icon4 from "../../assets/iconsDashboard/iconPergunta.svg";
import icon5 from "../../assets/iconsDashboard/iconSuporte.svg";
import { AsideDashboard } from "../../components/asideDashboard";
import { CardProposalCookers } from "../../components/cardProposalCookers";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/HeaderDashboard";
import { useDiets } from "../../providers/diets";
import { useUser } from "../../providers/user";

export const ProposalsCookers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { diets } = useDiets();
  const { user } = useUser();

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
              nomeUser="Alysson Colombo"
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              icon4={icon4}
              icon5={icon5}
              textIcon1="Dashboard"
              textIcon2="Buscar novas propostas"
              textIcon3="Ver propostas aceitas"
              textIcon4="Perguntas frequentes"
              textIcon5="Fale com a central"
              baseColor="#12120E"
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              link1="/admin"
              link2="/proposals-cookers"
              link3="/all-proposals"
            />
          </Box>
          <Box
            w={["100vw", "100vw", "100vw", "100vw", "80vw", "85vw"]}
            ml={["10px", "10px", "15px", "25px", "37px"]}
            mr={["10px", "10px", "15px", "25px", "37px"]}
          >
            <Center w={["100%"]} h={["auto"]} m="0px 50px">
              <VStack w={["90%", "auto"]}>
                <VStack alignItems={"flex-start"} w={"100%"}>
                  <Heading spacing={"8px"} w={"100%"} fontSize={"30px"}>
                    Dietas disponíveis
                  </Heading>
                  <Text
                    w={"100%"}
                    fontFamily={"Inter"}
                    fontSize={["12px", "16px"]}
                  >
                    Aqui você encontra as suas dietas que outros clientes
                    inseriram para você fazer propostas!
                  </Text>
                </VStack>
                <SimpleGrid columns={[1, 2, 3]} spacing={[3, 5, 8]}>
                  {diets
                    .filter((dieta) => dieta.clientId === user.id)
                    .map((diet) => (
                      <CardProposalCookers diet={diet} />
                    ))}
                </SimpleGrid>
              </VStack>
            </Center>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
