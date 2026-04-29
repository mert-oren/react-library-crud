import { Link } from "react-router";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex flex-col">
        <Link to={"/"} className="btn btn-ghost text-2xl tracking-widest">
          Library CRUD
        </Link>
        <div className="menu flex flex-row underline text-md">
          <NavItem to="/books">Books</NavItem>
          <NavItem to="/books/add">Add</NavItem>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
