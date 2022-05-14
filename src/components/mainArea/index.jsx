import Banner from "../banner";
import CardDashboard from "../cardDashboard";
import { Flex } from "@chakra-ui/react";

const MainArea = () => {
  return (
    <>
      <Flex flexDirection="column" maxW="1440" align="center" justify="center">
        <Banner bg="" title="" decpripTion="" img={""} />

        <Flex w="100%" flexWrap="wrap" justify="center">
          <CardDashboard
            bg=""
            title=""
            decpripTion=""
            buttonText=""
            buttonColor=""
            img={""}
          />
          <CardDashboard
            bg=""
            title=""
            decpripTion=""
            buttonText=""
            buttonColor=""
            img={""}
          />
          <CardDashboard
            bg=""
            title=""
            decpripTion=""
            buttonText=""
            buttonColor=""
            img={""}
          />
          <CardDashboard
            bg=""
            title=""
            decpripTion=""
            buttonText=""
            buttonColor=""
            img={""}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default MainArea;
