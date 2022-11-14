import { React } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="px-3 font-bold	text-2xl py-4 w-100% text-white flex justify-between bg-[#F47B6E]">
      <Link to="/">
        <h1 className="cursor-pointer tracking-tighter">Pic Some</h1>
      </Link>
      <Link to="/cart">
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </Link>
    </header>
  );
};

export default Header;
