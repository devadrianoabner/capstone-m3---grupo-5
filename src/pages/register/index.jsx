import {
  Text,
  VStack,
  Flex,
  Button,
  Heading,
  Select,
  FormLabel,
  FormErrorMessage,
  FormControl,
  useToast,
  Box,
  toast,
  Image,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router-dom";
import { InputDiv } from "../../components/inputDiv";
import api from "../../services/api";
import { Link } from "react-router-dom";

import transparentImg from "../../assets/img/backgroundRegisterPNGTransparent.png";
import imgRegisterPng1 from "../../assets/img/imgRegisterPng1.png";
import imgRegisterPng2 from "../../assets/img/imgRegisterPng2.png";

const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos!")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere!")
      .required("Campo obrigatório!"),
    type: yup
      .string()
      .required("Escolha sua categoria")
      .test(
        "chooseType",
        "Escolha a categoria que você está",
        (value) => value
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  // para navegar entre as páginas
  const handleNavigation = (path) => {
    return history.push(path);
  };

  const onSubmitFunction = ({ name, email, password, type }) => {
    const user = {
      name,
      email,
      password,
      type,
    };

    api
      .post("/users", user)
      .then((_) => {
        toast({
          title: "Sua conta foi criada!",
          status: "success",
          isClosable: true,
        });
        history.push("/login");
      })
      .catch((err) => {
        toast({
          title: `${
            err.response.user.message === "Email already exists"
              ? "Email já existente"
              : err.response.data.message
          }`,
          status: "error",
          isClosable: true,
        });
      });
  };

  // if (authenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <Flex
      w="100%"
      minH="100vh"
      bgImage={transparentImg}
      bgColor="#ecdf85"
      direction="row"
      justify="space-between"
      align="center"
    >
      <Image src={imgRegisterPng1} maxW="500px" mt="400px" />
      <VStack
        minW={["460px"]}
        bgColor="#FFF"
        p="20px 20px 80px 20px"
        m="0px 20px"
        borderRadius="8px"
      >
        <Heading color="#000" fontSize="26px" fontWeight="normal">
          Crie sua conta
        </Heading>
        <Box w="50px" h="3px" bgColor="#FFE32F"></Box>
        <Text color="#000" fontSize="14px">
          Simples, rápido e fácil!
        </Text>

        <Box
          onSubmit={handleSubmit(onSubmitFunction)}
          as="form"
          w="calc(100% - 80px)"
          m="0px 40px"
        >
          <InputDiv
            label="Nome"
            name="name"
            register={register}
            error={errors.name?.message}
            placeholder="Digite seu nome"
          />
          <InputDiv
            label="Email"
            name="email"
            register={register}
            error={errors.email?.message}
            placeholder="Digite seu email"
          />

          <FormControl isInvalid={errors.type?.message}>
            <FormLabel color="#000" fontSize="xs" htmlFor="type" mt="20px">
              Selecionar categoria
            </FormLabel>
            <Select
              border="none"
              bgColor="#F3F3F3"
              color="#9E9E9E"
              {...register("type")}
            >
              <option
                style={{ color: "#9E9E9E", backgroundColor: "#F3F3F3" }}
                value=""
                hidden
              >
                Selecionar categoria
              </option>
              <option
                value="Usuário"
                w="100%"
                style={{
                  color: "#9E9E9E",
                  backgroundColor: "#F3F3F3",
                }}
              >
                Usuário
              </option>
              <option
                value="Prestador de serviço"
                style={{ color: "#9E9E9E", backgroundColor: "#F3F3F3" }}
              >
                Prestador de serviço
              </option>
            </Select>
            <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
          </FormControl>

          <InputDiv
            label="Senha"
            name="password"
            register={register}
            error={errors.password?.message}
            placeholder="Digite sua senha"
          />
          <InputDiv
            label="Confirmação de senha"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
            placeholder="Confirme sua senha"
          />

          <Button
            isFullWidth
            mt="20px"
            bgColor="#FFE32F"
            type="submit"
            borderRadius="4px"
            fontWeight="light"
          >
            Cadastrar
          </Button>
        </Box>
        <Text fontSize="10px" pt="8px">
          Já conta? Clique <Link to="/login">aqui</Link> para acessar sua conta
        </Text>
      </VStack>
      <Image src={imgRegisterPng2} maxW="100%" h="auto" mt="400px" />
    </Flex>
  );
};

export default Signup;
