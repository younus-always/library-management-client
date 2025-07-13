import { Link, NavLink } from "react-router";
import { ModeToggle } from "../mood-toggle";
import logoImg from "../../assets/logo.png";

const Navber = () => {
  return (
    <nav className="bg-slate-950 py-5">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-1 group duration-150">
          <img src={logoImg} alt="book logo" width={40} />
          <h3 className="text-2xl font-semibold text-slate-100">
            Li<span className="text-amber-200 group-hover:text-slate-100">br</span>ico
          </h3>
        </Link>
        <ul className="flex items-center gap-3 text-lg text-slate-100 font-semibold">
          <li className="hover:text-yellow-300 duration-200">
            <NavLink to={"/all-books"}>All Books</NavLink>
          </li>
          <li className="hover:text-yellow-300 duration-200">
            <NavLink to={"/add-book"}>Add Book</NavLink>
          </li>
          <li className="hover:text-yellow-300 duration-200">
            <NavLink to={"borrow-summary"}>Borrow Summary</NavLink>
          </li>
        </ul>

        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navber;
