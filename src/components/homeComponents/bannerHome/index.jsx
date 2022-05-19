import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const BannerHome = ({
  bg,
  title,
  decpripTion,
  img,
  textButton,
  bgColorButton,
  Link,
}) => {
  const history = useHistory();
  return (
    <>
      <Flex w={"100%"} h="100%" mb="50px" align={"center"}>
        <Flex
          bg={bg}
          justify={["space-between"]}
          align={["center", "flex-start"]}
          p={["0", "10px"]}
          w="100%"
          h="100%"
          maxH="500px"
          mx="auto"
          pos="relative"
        >
          <Flex direction={"column"} maxH="400px" p="10px">
            <Heading
              color="#12120E"
              fontWeight="900"
              fontSize={["15px", "17px", "22px", "27px"]}
              w={["155px", "180px", "220px", "270px", "380px"]}
              mt={["5px", "20px", "50px"]}
            >
              {title}
            </Heading>
            <Text
              color="#12120E"
              mt={["2", "5", "5", "5"]}
              mb={["2", "5", "5", "5"]}
              w={["170px", "230px", "350px", "450px", "571px"]}
              fontSize={["8px", "10px", "12px", "15px"]}
              fontWeight="500"
            >
              {decpripTion}
            </Text>
            <Button
              onClick={() => history.push("/register")}
              bg={bgColorButton}
              maxW="170px"
              border={"2px solid black"}
              _hover={{
                background: "#000000",
                color: "#fff",
              }}
            >
              {textButton}
            </Button>
          </Flex>
          <Flex maxW="400px">
            <Image src={img} alt="um card" w="100%" m="10px" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
