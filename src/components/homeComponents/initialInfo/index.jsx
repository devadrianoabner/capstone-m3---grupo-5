import { Button, Flex, Image, Text } from "@chakra-ui/react";
import InitialInfoImage from "../../../assets/img/home/initialInfoImage.svg";
import LogoImage from "../../../assets/img/home/logoImg.svg";

export const InitialInfo = () => {
  return (
    <>
      <Flex
        mt="60px"
        width="90%"
        justify={"space-between"}
        direction={["column", "column", "column", "row", "row"]}
        align="center"
      >
        <Flex direction={"column"} gap="20px">
          <Flex gap="10px" maxW="400px">
            <Text fontSize={"30px"} maxW="400px">
              Hora do Rango
            </Text>
            <Image src={LogoImage} maxW="50px" />
          </Flex>

          <Flex direction={"column"} gap="30px">
            <Text maxW="500px">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
          </Flex>
        </Flex>
        <Image
          src={InitialInfoImage}
          w={["70%", "70%", "70%", "440px", "550px"]}
          mt={["30px", "30px", "30px", "0px", "0px"]}
        />
      </Flex>
    </>
  );
};
