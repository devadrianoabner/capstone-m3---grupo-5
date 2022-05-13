import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select as ChakraSelect,
} from "@chakra-ui/react";

const Select = ({ register, name, label, errors, ...rest }) => {
  return (
    <FormControl w={"85%"}>
      <FormLabel textAlign={"center"} color={"black"} fontSize={"13px"}>
        {label}
      </FormLabel>
      <ChakraSelect
        {...register(name)}
        name={name}
        {...rest}
        border={"transparent"}
        bgColor={"white"}
      >
        <option value="" hidden>
          Opções para dietas restritas
        </option>
        <option value="Vegano">Vegano</option>
        <option value="LacFree">LacFree</option>
        <option value="Gluten free">Gluten free</option>
        <option value="Vegetariano">Vegetariano</option>
      </ChakraSelect>

      <FormHelperText fontSize={"12px"} color={"red"} my={"1"}>
        {errors}
      </FormHelperText>
    </FormControl>
  );
};
export default Select;
