import {
  Box,
  Input,
  FormLabel,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

export const InputDiv = ({ name, label, register, error = "", ...rest }) => {
  return (
    <FormControl isInvalid={error}>
      <Box w="100%" mt="20px">
        <FormLabel color="#000" fontSize="xs" htmlFor={name}>
          {label}
        </FormLabel>
      </Box>
      <Input
        border="none"
        bg="#F3F3F3"
        _placeholder={{ color: "#9E9E9E" }}
        {...register(name)}
        {...rest}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
