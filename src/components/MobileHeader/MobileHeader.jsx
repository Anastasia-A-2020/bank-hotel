import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { Logo } from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./MobileHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowMobileMenu } from "../../redux/slices/appSlice";

export function MobileHeader() {
  const dispatch = useDispatch();
  const isShowMobileMenu = useSelector(store => store.app.isShowMobileMenu);

  const toggleIsShowMenu = () => {
    dispatch(setIsShowMobileMenu());
  };

  return (
    <>
      <header className="relative p-[10px] flex flex-row w-screen justify-between bg-[#313F38]">
        <Logo />
        <button onClick={toggleIsShowMenu} className="cursor-pointer">
          {isShowMobileMenu ? (
            <TfiClose size={37} className="icon" />
          ) : (
            <HiOutlineMenuAlt4 size={37} className="icon" />
          )}
        </button>

        <MobileMenu
          toggleIsShowMenu={toggleIsShowMenu}
          isShowMobileMenu={isShowMobileMenu}
        />
      </header>
    </>
  );
}
