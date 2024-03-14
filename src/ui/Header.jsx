import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div className="bg-yellow-400">
      <Link to="/">
        <strong>The Pizza Palettle</strong>
      </Link>
      <SearchOrder />
      <p>Header Component</p>
    </div>
  );
}

export default Header;
