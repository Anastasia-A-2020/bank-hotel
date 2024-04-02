import "./Home.scss";
import aboutImage from "../../assets/homePageImgs/about.jpg";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <div className="font-mono p-[10px] bg-[#313F38] ">
      <Hero />

      <h2 className="subtitle">About US</h2>
      <img className="mb-[50px]" src={aboutImage} alt="about image" />
    </div>
  );
}
