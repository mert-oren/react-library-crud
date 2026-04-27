import { NavLink } from "react-router";
import type { NavItemProps } from "../types/NavItemProps";

const NavItem = ({ to, children }: NavItemProps) => {
  return (
    <div>
      <li>
        <NavLink
          to={to}
          end
          className={({ isActive }) => `${isActive ? "menu-active" : ""}`}
        >
          {children}
        </NavLink>
      </li>
    </div>
  );
};

export default NavItem;
