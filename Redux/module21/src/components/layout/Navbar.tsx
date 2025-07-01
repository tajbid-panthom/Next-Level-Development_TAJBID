import { Link } from "react-router";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-4">
      <div className="flex items-center text-shadow-amber-50 text-4xl font-bold">
        TajDEV<span className="text-amber-500 text-4xl">.</span>
      </div>
      <div className="flex items-center gap-4 text-lg">
        <Link to={"/user"}>User</Link>
        <Link to={"/"}>Tasks</Link>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
