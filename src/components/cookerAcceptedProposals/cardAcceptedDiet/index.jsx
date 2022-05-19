import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDiets } from "../../../providers/diets";
import { useToken } from "../../../providers/token";
import api from "../../../services";
import { CancelModalConfirmation } from "../cancelModalConfirmation";
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

  return (
    <Box bg="#d3d3d3" p="15px" borderRadius="10px" mt="20px">
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
          <Flex>
            <Flex justify="center">
              <Text fontSize="22px" mr="15px">
                R${price.toFixed(2).replace(".", ",")}
              </Text>
            </Flex>
            {finished ? (
              <Text>Dieta Finalizada!</Text>
            ) : (
              <Flex justifyContent="center" alignItems="center">
                <CancelModalConfirmation dietId={dietId} clientId={clientId} />
                <FinishConfirmationModal dietId={dietId} clientId={clientId} />
              </Flex>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
