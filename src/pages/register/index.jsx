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
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router-dom";

const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup
    .string()
    .required("Campo obrigatório!"),
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
    .test("chooseType", "Escolha a categoria que você está", (value) => value),
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
    width="100vw"
    minH="100vh"
    bgColor="#121214"
    direction="column"
    justify="flex-start"
    align="center"
    pt="20px"
  >
      <VStack
        minWidth={["200px", "400px"]}
        bgColor="#212529"
        p="10px 20px"
        m="0px 20px"
        borderRadius="8px"
      >
        <Heading color="#FFF" fontSize="lg">
          Crie sua conta
        </Heading>
        <Text color="#868E96" fontSize="10px">
          Simples, rápido e fácil!
        </Text>
        
        <Box
          onSubmit={handleSubmit(onSubmitFunction)}
          as="form"
          w="calc(100% - 20px)"
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
          <FormControl isInvalid={errors.type?.message}>
            <FormLabel
              color="#F8F9FA"
              fontSize="xs"
              htmlFor="type"
              mt="20px"
            >
              Selecionar módulo
            </FormLabel>
            <Select
              color="#a3a5a7"
              bg="#343B41"
              border="none"
              {...register("type")}
            >
              <option
                style={{ color: "white", backgroundColor: "#343B41" }}
                value=""
                hidden
              >
                Selecionar categoria
              </option>
              <option
                value="Usuário"
                style={{ color: "white", backgroundColor: "#343B41" }}
              >
                Usuário
              </option>
              <option
                value="Prestador de serviço"
                style={{ color: "white", backgroundColor: "#343B41" }}
              >
                Prestador de serviço
              </option>
              </Select>
            <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
          </FormControl>

          <Button
            isFullWidth
            mt="20px"
            bgColor="#59323F"
            color="#FFF"
            type="submit"
            borderRadius="4px"
            fontWeight="light"
          >
            Cadastrar
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
}

export default Signup;
