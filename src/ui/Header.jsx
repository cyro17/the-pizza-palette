import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <SearchOrder />
      <p>Header Component</p>
    </div>
  );
}

export default Header;
