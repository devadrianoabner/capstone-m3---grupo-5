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
        title="Lorem ipsum"
        decpripTion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,sunt in culpa qui officia deserunt mollit anim id est laborum."
        textButton="Fazer Cadastro"
        bgColorButton="#eeeeee"
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
