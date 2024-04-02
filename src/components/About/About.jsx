import { useSelector } from "react-redux";
import aboutImage from "../../assets/homePageImgs/about.jpg";
import RoundButton from "../RoundButton/RoundButton";
import "./About.scss";

export default function About() {
  const isMobile = useSelector(store => store.app.isMobile);

  return (
    <section className="about relative">
      <h2 className="about__title">About US</h2>
      <img className="mb-[50px]" src={aboutImage} alt="about image" />
      <div className="about__wrapper">
        <h3 className="about__subtitle">High quality</h3>
        <p className="about__description">
          The five-star Bank Hotel was reopened to visitors in 2016. The
          building was renovated and modernized to meet the expectations of the
          most demanding guests. We offer luxurious rooms, numerous facilities,
          and exceptional service.
        </p>
      </div>
      {!isMobile && (
        <img
          className="absolute top-0 right-8 w-[200px]"
          src={aboutImage}
          alt="about image"
        />
      )}
      {!isMobile && (
        <div className="absolute bottom-0 right-0">
          <RoundButton text="rooms and apartments" border={true} />
        </div>
      )}
    </section>
  );
}
