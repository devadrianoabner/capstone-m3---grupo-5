import { BannerHome } from "../bannerHome";
import ImgBannerHome from "../../../assets/img/home/ImgBannerHome.svg";
import { FeedBackImg } from "../feedbackImg";
import { InitialInfo } from "../initialInfo";
import { WorksHome } from "../worksComponentHome";
import { Team } from "../team";
import { Sugests } from "../sugests";

export const MainHome = () => {
  return (
    <>
      <BannerHome
        bg="#DECD5B"
<<<<<<< HEAD
        title="Conheça a novidade!"
        decpripTion="Já imaginou se toda vez que batesse aquela fome de algo gostoso você abrisse a sua geladeira e tivesse aquele rango deliciiinha te esperando? Às vezes a gente não tem disposição e tempo para cozinhar,  sem falar que nem sempre conseguimos fazer algo bom com os recursos que temos, então a Hora do Rango chegou para servir refeições de acordo com a sua vontade. Tá esperando o quê para pedir?"
=======
        title="Hora do rango?"
        decpripTion="Já imaginou se toda vez que batesse aquela fome de algo gostoso você abrisse a sua geladeira e tivesse aquele rango deliciinha te esperando? As vezes a gente não tem disposição e tempo para cozinhar,  sem falar que nem sempre conseguimos fazer algo bom com os recursos que temos, então a Hora do rango chegou para servir refeições de acordo com a sua vontade. Ta esperando o que para pedir? "
>>>>>>> origin/feqature/bugFixLayouts
        textButton="Fazer Cadastro"
        bgColorButton="#0000"
        img={ImgBannerHome}
      />
      <FeedBackImg />
      <InitialInfo />
      <WorksHome />
      <Team></Team>
      <Sugests />
    </>
  );
};
