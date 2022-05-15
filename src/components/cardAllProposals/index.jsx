import { Flex, Box, Text, Button } from "@chakra-ui/react";

export const CardAllProposals = () => {
  return (
    <Box bg="#d3d3d3" p="15px" borderRadius="10px" mt="10px">
      <Flex>
        <Box width="65%">
          <Flex alignItems="center">
            <Text fontSize="20px">Título:</Text>
            <Text fontSize="15px" ml="5px">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Text>
          </Flex>
        </Box>
        <Box width="25%">
          <Flex justifyContent="center" alignItems="center">
            <Button w="90px" h="30px">
              Cancelar
            </Button>
            <Button ml="5px" w="90px" h="30px">
              Finalizar
            </Button>
          </Flex>
        </Box>
        <Box width="10%">
          <Flex alignItems="center">
            <Text fontSize="22px">R$35,00</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
