import { Button, Heading, Text, useToast } from "@chakra-ui/react";
import { CardContador } from "../../components/cardContador";
import CardProposal from "../../components/cardProposal";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/HeaderDashboard";
import { useToken } from "../../providers/token";
import { useUser } from "../../providers/user";

export const Components = () => {
  const toast = useToast();
  const { token, setToken } = useToken();
  const { user, setUser } = useUser();
  console.log(user);

  return (
    <>
      <Header />
      <Button
        onClick={() => {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          const newU = { ...user };
          newU.name = "Murilo Doidão";
          setUser(newU);
          setToken("mudei");
        }}
      >
        Show Toast
      </Button>
      <Heading>{user.name}</Heading>
      <Text>{token}</Text>
      <CardProposal />
      <Footer color="footerDashboard" />
      {/* TEM QUE COLOCAR A COR SE É DO DASHBOARD OU LOGIN / REGISTRO*/}
    </>
  );
};
