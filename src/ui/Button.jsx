import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "bg-yellow-400 font-semibold text-stone-800 my-2 px-1 py-1 inline-block rounded-full uppercase tracking-wide hover:bg-yellow-300 hover:ring-yellow-300 hover:offset-2 transition-colors duration-300 focus:outline-none focus:ring-yellow-300 focus:ring focus:offset-2 disabled:cursor-not-allowed disabled:bg-slate-600";

  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
