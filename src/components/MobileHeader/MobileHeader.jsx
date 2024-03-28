import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { Logo } from "../Logo/Logo";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./MobileHeader.scss";

export function MobileHeader() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleIsShowMenu = () => {
    setIsShowMenu(prev => !prev);
  };

  return (
    <>
      <header className="relative p-[10px] flex flex-row w-screen justify-between bg-[#313F38]">
        <Logo />
        <button onClick={toggleIsShowMenu} className="cursor-pointer">
          {isShowMenu ? (
            <TfiClose size={37} className="icon" />
          ) : (
            <HiOutlineMenuAlt4 size={37} className="icon" />
          )}
        </button>

        <MobileMenu
          toggleIsShowMenu={toggleIsShowMenu}
          isShowMenu={isShowMenu}
        />
      </header>
    </>
  );
}
