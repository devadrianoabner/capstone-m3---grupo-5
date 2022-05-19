import { Heading } from "@chakra-ui/react";
import CardProposal from "../../components/cardProposal";
import { useDiets } from "../../providers/diets";
import { useUser } from "../../providers/user";
import { useHistory } from "react-router-dom";
export const Diets = () => {
  const { diets } = useDiets();
  const { user } = useUser();
  const history = useHistory();

  if (user.type === "Prestador") {
    return history.push("/admin");
  }

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
