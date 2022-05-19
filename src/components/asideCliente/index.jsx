import { AsideDashboard } from "../asideDashboard";

import imgPerfil from "../../assets/iconsDashboard/foto.svg";
import icon1 from "../../assets/iconsDashboard/iconHome.svg";
import icon2 from "../../assets/iconsDashboard/food.svg";
import icon3 from "../../assets/iconsDashboard/iconApertoDeMao.svg";
import icon4 from "../../assets/iconsDashboard/iconPergunta.svg";
import icon5 from "../../assets/iconsDashboard/iconSuporte.svg";
import { useDisclosure } from "@chakra-ui/react";

export const AsideCliente = ({ isOpen, onOpen, onClose, user }) => {
  /*   const { isOpen, onOpen, onClose } = useDisclosure();
   */
  return (
    <AsideDashboard
      corBody="#A69C5D"
      fotoUser={imgPerfil}
      nomeUser={user}
      icon1={icon1}
      icon2={icon3}
      icon3={icon4}
      icon4={icon5}
      textIcon1="Dashboard"
      textIcon2="Ver dietas"
      textIcon3="Dúvidas frequentes"
      textIcon4="Fale com a central"
      baseColor="#12120E"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      link1="/dashboard"
      link2="/proposals-clients"
    />
  );
};
