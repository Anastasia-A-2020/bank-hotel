import { useSelector } from "react-redux";
import bookRoomImage from "../../assets/homePageImgs/HeroImg.jpg";
import bookRoomImageDesk from "../../assets/homePageImgs/HeroImgDesk.jpg";
import "./Hero.scss";
import RoundButton from "./RoundButton/RoundButton";

export default function Hero() {
  const isMobile = useSelector(store => store.app.isMobile);
  return (
    <section className="hero">
      <h1 className="font-mono italic text-[#FCD043] text-[62px]">
        <span className="text-[#E5E5E5]">Bank</span>Hotel
      </h1>
      <div className="hero__inner-wrapper">
        <p className="font-serif text-center	text-[#FCD043] text-sm">
          rooms // restaurant // congress hall // wine bar
        </p>
        <p
          className={`hero__description ${
            isMobile && "hero__description--under mt-[24px] mb-[40px]"
          }  max-w-[290px] font-mono text-[#E5E5E5] ${
            isMobile && "text-center"
          } text-xs`}
        >
          The luxurious hotel in the most beautiful European city with an
          exclusive restaurant, conference-hall, and art-bar.
        </p>
      </div>
      <div className="relative">
        <img
          className="mb-[50px]"
          src={isMobile ? bookRoomImage : bookRoomImageDesk}
          alt="the room with a table"
        />

        <ul className="hero__actions">
          <li className={isMobile ? "visually-hidden" : "hero__btn"}>
            <button type="button">Check in</button>
          </li>
          <li className={isMobile ? "visually-hidden" : "hero__btn"}>
            <button type="button">Check out</button>
          </li>
          <li
            className={
              isMobile ? "visually-hidden " : "hero__btn hero__btn--accent"
            }
          >
            <button type="button">Book room</button>
          </li>
          {isMobile && (
            <li className="">
              <RoundButton
                text="Book room"
                width="120px"
                height="120px"
                bg="#fcd043"
              />
            </li>
          )}
        </ul>
      </div>

      <div className="hero__inner-wrapper">
        <div className={isMobile ? "visually-hidden" : "hero__contacts"}>
          <a className="underline italic" href="phone: +380322975020">
            +38 032 297 50 20
          </a>
          <address>
            <span>8 Lystopadovoho Chynu, Lviv</span>
          </address>
        </div>

        <p
          className={`max-w-[117px] font-mono text-[#E5E5E5] ${
            isMobile ? "text-left" : "text-right"
          }  text-xs uppercase`}
        >
          Art & Congress hall
        </p>
      </div>
    </section>
  );
}
