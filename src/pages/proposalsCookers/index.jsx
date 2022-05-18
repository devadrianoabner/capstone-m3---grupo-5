import { Header } from "../../components/HeaderDashboard";
import { AsideCozinheiro } from "../../components/asideCozinheiro";
import { Footer } from "../../components/Footer";

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
import { CardProposalCookers } from "../../components/cardProposalCookers";
import { useDiets } from "../../providers/diets";

export const ProposalsCookers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { diets } = useDiets();

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
                  {diets.map((diet) => (
                    <CardProposalCookers diet={diet} />
                  ))}
                  {/* retirei esse codigo :.filter((dieta) => dieta.clientId === user.id)
                   */}
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
