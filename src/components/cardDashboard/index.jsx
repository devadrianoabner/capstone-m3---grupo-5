import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Redirect, Link } from "react-router-dom";
//import { useState } from "react";
import ModalDiet from "../ModalDiet";
export const CardDashboard = ({
  bg,
  title,
  decpripTion,
  buttonText,
  buttonColor,
  img,
  modal = false,
  linkBtn,
}) => {
  return (
    <>
      <Flex w="100%" h={["125px", "auto"]}>
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
          alignItems="flex-start"
          py={["10px", "20px"]}
        >
          <VStack
            alignItems={"flex-start"}
            h={"100%"}
            justifyContent={"space-between"}
          >
            <Heading
              color="#12120E"
              fontWeight="800"
              fontSize={["12px", "15px", "20px", "25px"]}
              w={["140px", "190px", "250px", "300px", "360px"]}
            >
              {title}
            </Heading>
            <Text
              color="#12120E"
              mt="3px"
              pb={["2px", "20px", "15px", "10px"]}
              w={["100px", "120px", "180px", "250px"]}
              fontSize={["8px", "10px", "12px"]}
              fontWeight="500"
            >
              {decpripTion}
            </Text>

            {!modal ? (
              <Button
                width={["74px", "100px", "147px"]}
                height={["22px", "25px", "30px"]}
                bg={buttonColor}
                color="#fff"
                fontSize={["8px", "12px", "15px", "15px"]}
                fontWeight="500"
              >
                <Link to={linkBtn}>{buttonText}</Link>
              </Button>
            ) : (
              <ModalDiet>Fazer pedido</ModalDiet>
            )}
          </VStack>
          <Image
            src={img}
            alt="um card"
            w={["60px", "90px", "120px", "120px"]}
            pos="absolute"
            bottom={["2", "2", "4"]}
            right={["2", "2", "4"]}
            ml="5px"
          />
        </Flex>
      </Flex>
    </>
  );
};
