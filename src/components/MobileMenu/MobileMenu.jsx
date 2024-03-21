import PropTypes from "prop-types";
import { NavigationList } from "../../NavigationList/NavigationList";
import MobileContacts from "../MobileContacts/MobileContacts";
import "./MobileMenu.css";

export default function MobileMenu({ isMobile, toggleIsShowMenu }) {
  return (
    <div className="container max-w-full" onClick={toggleIsShowMenu}>
      <NavigationList isMobile={isMobile} />
      <MobileContacts />
    </div>
  );
}

MobileMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  toggleIsShowMenu: PropTypes.func.isRequired,
};
