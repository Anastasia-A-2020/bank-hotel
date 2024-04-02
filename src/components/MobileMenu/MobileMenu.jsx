import PropTypes from "prop-types";
import { NavigationList } from "../../NavigationList/NavigationList";
import MobileContacts from "../MobileContacts/MobileContacts";
import { useSelector } from "react-redux";
import "./MobileMenu.scss";

export default function MobileMenu({ toggleIsShowMenu, isShowMobileMenu }) {
  const isMobile = useSelector(store => store.app.isMobile);

  return (
    <div
      className={`container ${
        isShowMobileMenu ? "container--visible " : ""
      } max-w-full`}
      onClick={toggleIsShowMenu}
    >
      <NavigationList isMobile={isMobile} />
      <MobileContacts />
    </div>
  );
}

MobileMenu.propTypes = {
  toggleIsShowMenu: PropTypes.func.isRequired,
  isShowMobileMenu: PropTypes.bool.isRequired,
};
