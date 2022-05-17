import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDiets } from "../../../providers/diets";
import { useToken } from "../../../providers/token";
import api from "../../../services";
import { FinishConfirmationModal } from "../finishConfirmationModal";

export const CardAcceptedDiet = ({ diet }) => {
  const { description, price, clientId, id: dietId, finished } = diet;

  const [clientName, setClientName] = useState("");
  const { token } = useToken();

  useEffect(() => {
    api
      .get(`users/${clientId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setClientName(res.data.name));
  }, []);

  console.log(clientName);

  return (
    <Box bg="#d3d3d3" p="15px" borderRadius="10px" mt="10px">
      <Flex justify="space-between">
        <Box width="65%">
          <Flex align="center">
            <Text fontSize="20px">{clientName}:</Text>
            <Text fontSize="15px" ml="5px">
              {description}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex justify="center">
            <Text fontSize="22px">R${price.toFixed(2).replace(".", ",")}</Text>
          </Flex>
          {finished ? (
            <Text>Dieta Finalizada!</Text>
          ) : (
            <Flex justifyContent="center" alignItems="center">
              <Button w="80px" h="30px" colorScheme="red">
                Cancelar
              </Button>
              <FinishConfirmationModal dietId={dietId} />
            </Flex>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
