import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div
      className="bg-stone-700  text-stone-200 text-left text-sm
      p-4 uppercase px-4 py-4 sm:px-6 md:text-base flex items-center justify-between"
    >
      <p className="space-x-4 text-stone-300 font-semibold sm:space-x-6">
        <span>23 pizzas </span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
