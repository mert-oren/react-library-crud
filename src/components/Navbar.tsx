import { Link } from "react-router";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex flex-col">
        <Link to={"/"} className="btn btn-ghost text-2xl tracking-widest">
          Library CRUD
        </Link>
        <ul className="menu menu-horizontal px-1 underline text-md">
          <NavItem to="/books">Books</NavItem>
          <NavItem to="/books/add">Add</NavItem>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
