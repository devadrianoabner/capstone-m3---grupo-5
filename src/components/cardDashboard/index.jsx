import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";

const CardDashboard = ({
  bg,
  title,
  decpripTion,
  buttonText,
  buttonColor,
  img,
}) => {
  return (
    <>
      <Flex
        w={["150px", "235px", "350px", "480px"]}
        h={["133px", "200px", "219px"]}
        m={["5px", "8px", "11px", "16px", "20px"]}
      >
        <Flex
          bg={bg}
          justify={["space-between", "space-between"]}
          align="center"
          px="0.8rem"
          w="100%"
          h="100%"
          mx="auto"
          borderRadius="10px"
          pos="relative"
        >
          <div>
            <Heading
              color="#12120E"
              fontWeight="800"
              fontSize={["12px", "15px", "20px", "25px"]}
              w={["150px", "160px", "200px", "250px", "360px"]}
            >
              {title}
            </Heading>
            <Text
              color="#12120E"
              mt={["2", "5", "5", "5"]}
              mb={["2", "5", "5", "5"]}
              w={["100px", "120px", "180px", "250px"]}
              fontSize={["8px", "10px", "12px"]}
              fontWeight="500"
            >
              {decpripTion}
            </Text>

            <Button
              width={["74px", "100px", "147px"]}
              height={["22px", "30px", "39px"]}
              px="5"
              bg={buttonColor}
              color="#fff"
              fontSize={["8px", "12px", "15px", "15px"]}
              fontWeight="500"
            >
              {buttonText}
            </Button>
          </div>
          <Image
            src={img}
            alt="um card"
            w={["60px", "90px", "130px", "150px"]}
            pos="absolute"
            bottom={["2", "2", "4"]}
            right={["2", "2", "4"]}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default CardDashboard;