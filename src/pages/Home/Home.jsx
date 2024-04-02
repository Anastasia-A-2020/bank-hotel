import "./Home.scss";

import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";

export default function Home() {
  return (
    <div className="font-mono p-[10px] bg-[#313F38] ">
      <Hero />
      <About />
    </div>
  );
}
