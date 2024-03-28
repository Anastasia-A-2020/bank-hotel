import PropTypes from "prop-types";
import { NavigationList } from "../../NavigationList/NavigationList";
import MobileContacts from "../MobileContacts/MobileContacts";
import { useSelector } from "react-redux";
import "./MobileMenu.scss";

export default function MobileMenu({ toggleIsShowMenu, isShowMenu }) {
  const isMobile = useSelector(store => store.app.isMobile);

  return (
    <div
      className={`container ${
        isShowMenu ? "container--visible " : ""
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
  isShowMenu: PropTypes.bool.isRequired,
};
