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
        <NavLink className="flex w-full" to="/">
          home
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink className="flex w-full" to="/about">
          about
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink className="flex w-full" to="/rooms">
          rooms
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink className="flex w-full" to="/restaurant">
          restaurant
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink className="flex w-full" to="/conference">
          conference
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink className="flex w-full" to="/contacts">
          contacts
        </NavLink>
      </li>
    </ul>
  );
}
