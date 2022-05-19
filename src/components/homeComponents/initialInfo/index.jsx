import { Button, Flex, Image, Text } from "@chakra-ui/react";
import InitialInfoImage from "../../../assets/img/home/initialInfoImage.svg";
import LogoImage from "../../../assets/img/home/logoImg.svg";

export const InitialInfo = () => {
  return (
    <>
      <Flex mt="60px" width="90%" justify={"space-between"} align="center">
        <Flex direction={"column"} gap="20px">
          <Flex gap="10px" maxW="400px">
            <Text fontSize={"30px"} maxW="400px">
              Tempo para cozinhar?
            </Text>
            <Image src={LogoImage} maxW="50px" />
          </Flex>
          <Flex direction={"column"} gap="30px">
            <Text maxW="500px">
              Mudar alimentação, comer algo saboroso, se manter saudável e em
              forma as vezes é um desafio imenso. Fazer uma preparação dessas as
              pode parecer impossível com tantas coisas acontecendo na nossa
              vida. Por conta disso a Hora do rango conta com centenas de
              cozinheiros que podem quebrar esse galho para você. Além de
              receber toda uma programação alimentar já preparada, você ainda
              garante qualidade e sabor nas suas refeições. A gente sabe da
              importância do seu tempo e também do seu paladar, chega de comer
              comida rápida sem gosto e sem valor nutritivo!
            </Text>
            <Button maxW={"200px"} >
              Fazer Cadastro
            </Button>
          </Flex>
        </Flex>
        <Image src={InitialInfoImage} maxW="640px" />
      </Flex>
    </>
  );
};
