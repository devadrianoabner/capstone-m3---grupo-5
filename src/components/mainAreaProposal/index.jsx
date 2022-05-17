import { Text, VStack, SimpleGrid, Center, Heading } from "@chakra-ui/react";
import { useDiets } from "../../providers/diets";
import { useUser } from "../../providers/user";
import CardProposal from "../cardProposal";

export const MainAreaProposal = () => {
  const { diets } = useDiets();
  const { user } = useUser();
  return (
    <Center w={["100%"]} h={["auto"]} m="0px 50px">
      <VStack w={["90%", "auto"]}>
        <VStack alignItems={"flex-start"} w={"100%"}>
          <Heading spacing={"8px"} w={"100%"} fontSize={"30px"}>
            Suas Dietas
          </Heading>
          <Text w={"100%"} fontFamily={"Inter"} fontSize={["12px", "16px"]}>
            Aqui você encontra as suas dietas inseridas e como está o andamento
            de cada uma delas! Você pode editar suas dietas, visualizar as
            propostas das suas dietas e excluir as dietas que desejar.
          </Text>
        </VStack>
        <SimpleGrid columns={[1, 2, 3]} spacing={[3, 5, 8]}>
          {diets
            .filter((dieta) => dieta.clientId === user.id)
            .map((diet) => (
              <CardProposal diet={diet} />
            ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
};
