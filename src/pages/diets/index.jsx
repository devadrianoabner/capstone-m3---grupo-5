import { Heading } from "@chakra-ui/react";
import CardProposal from "../../components/cardProposal";
import { useDiets } from "../../providers/diets";
import { useUser } from "../../providers/user";

export const Diets = () => {
  const { diets } = useDiets();
  const { user } = useUser();

  console.log(diets);
  console.log(user.id);
  return (
    <>
      <Heading>Suas Dietas</Heading>
      {diets
        .filter((dieta) => dieta.clientId === user.id)
        .map((diet) => (
          <CardProposal diet={diet} />
        ))}
    </>
  );
};
