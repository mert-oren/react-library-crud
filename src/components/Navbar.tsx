import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Library CRUD</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <NavItem to="/books">Books</NavItem>
            <NavItem to="/books/add">Add</NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
