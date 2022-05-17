import { AsideDashboard } from "../asideDashboard";

import imgPerfil from "../../assets/iconsDashboard/foto.svg";
import icon1 from "../../assets/iconsDashboard/iconHome.svg";
import icon2 from "../../assets/iconsDashboard/iconList.svg";
import icon3 from "../../assets/iconsDashboard/iconApertoDeMao.svg";
import icon4 from "../../assets/iconsDashboard/iconPergunta.svg";
import icon5 from "../../assets/iconsDashboard/iconSuporte.svg";
import { useDisclosure } from "@chakra-ui/react";

export const AsideCozinheiro = ({ isOpen, onOpen, onClose }) => {
  /*   const { isOpen, onOpen, onClose } = useDisclosure();
   */
  return (
    <AsideDashboard
      corBody="#A69C5D"
      fotoUser={imgPerfil}
      nomeUser="Alysson m."
      icon1={icon1}
      icon2={icon2}
      icon3={icon3}
      icon4={icon4}
      icon5={icon5}
      textIcon1="Dashboard"
      textIcon2="Fazer novas propostas"
      textIcon3="Ver propostas aceitas"
      textIcon4="Perguntas frequentes"
      textIcon5="Fale com a central"
      baseColor="#12120E"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      link1="/admin"
      link2="/proposals-cookers"
      link3="/cook-accepted-proposals"
    />
  );
};
