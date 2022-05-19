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
              Mudar alimentação, comer algo saboroso, se manter saudável e em
              forma, às vezes é um desafio imenso. Fazer uma preparação dessas
              pode parecer impossível com tantas coisas acontecendo na nossa
              vida. Por conta disso a Hora do Rango conta com centenas de
              cozinheiros que podem quebrar esse galho para você. Além de
              receber toda uma programação alimentar já preparada, você ainda
              garante qualidade e sabor nas suas refeições. A gente sabe da
              importância do seu tempo e também do seu paladar, chega de comer
              comida rápida sem gosto e sem valor nutritivo!
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
