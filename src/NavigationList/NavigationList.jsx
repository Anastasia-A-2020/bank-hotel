import { NavLink } from "react-router-dom";
import "./NavigationList.scss";
import { useSelector } from "react-redux";

export function NavigationList() {
  const isMobile = useSelector(store => store.app.isMobile);

  return (
    <ul
      className={`${
        isMobile ? "navMobile" : "nav"
      } flex gap-x-[60px] text-white uppercase `}
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
