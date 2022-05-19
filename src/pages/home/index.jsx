import { HeaderDefault } from "../../components/headerDefault";
import { MainHome } from "../../components/homeComponents/mainHome";
import { Footer } from "../../components/Footer";
import { Flex } from "@chakra-ui/react";


export const Home = () => {
  
  return (
    <Flex
      h="100%"
      w={"100%"}
      maxW="100vw"
      align="center"
      direction="column"
      justify="flex-start"
      bg="#fcf6e5"
    >
      <HeaderDefault />
      <MainHome />
      <Footer />
    </Flex>
  );
};
