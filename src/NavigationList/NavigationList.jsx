import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./NavigationList.css";

export function NavigationList({ isMobile }) {
  return (
    <ul
      className={`${
        isMobile ? "navMobile" : "nav"
      } flex gap-x-[70px] text-white uppercase `}
    >
      <li className="cursor-pointer">
        <NavLink to="/">home</NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink to="/about">about</NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink to="/rooms">rooms</NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink to="/restaurant">restaurant</NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink to="/conference">conference</NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink to="/contacts">contacts</NavLink>
      </li>
    </ul>
  );
}

NavigationList.propTypes = {
  isMobile: PropTypes.bool,
};

NavigationList.defaultProps = {
  isMobile: false,
};
