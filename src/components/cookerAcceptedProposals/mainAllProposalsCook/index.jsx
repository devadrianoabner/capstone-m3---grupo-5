import { Text, Image, Box, Flex } from "@chakra-ui/react";
import analitcs from "../../../assets/imgIndexAllProposals/analitcs.svg";
import { useDiets } from "../../../providers/diets";
import { useUser } from "../../../providers/user";

import { CardAllProposals } from "../../cardAllProposals";
import { CardAcceptedDiet } from "../cardAcceptedDiet";

export const MainAllProposalsCook = () => {
  const { diets } = useDiets();
  const { user } = useUser();

  return (
    <Box w="100%">
      <Flex direction="row">
        <Box ml="2vw" mr="2vw" w="100%">
          <Flex direction="column">
            <Text spacing={"8px"} w={"100%"} fontSize={"30px"}>
              Dietas Aceitas
            </Text>
            <Text
              mt="10px"
              spacing={"8px"}
              w={"100%"}
              maxW={"571px"}
              fontSize={"20px"}
            >
              Aqui você encontra as dietas que você enviou proposta e foram
              aceitas pelos clientes! Comece a preparar!
            </Text>
            {diets
              .filter((diet) => diet.cookId === user.id)
              .map((diet) => (
                <CardAcceptedDiet diet={diet} />
              ))}
          </Flex>
        </Box>
        {
          <Flex
            justifyContent="center"
            display={["none", "none", "none", "flex"]}
            w="30%"
          >
            <Image src={analitcs} />
          </Flex>
        }
      </Flex>
    </Box>
  );
};
