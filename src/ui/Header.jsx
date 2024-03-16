import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-400 text-left border-b border-stone-500 px-4 py-3 sm:px-6">
      <Link to="/" className="tracking-widest font-bold uppercase">
        The Pizza Palette
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
