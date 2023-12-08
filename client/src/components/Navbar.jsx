import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";

const NavBar = () => {
  return (
    <div className="Navbar w-[1175px] h-[46px] justify-center items-center gap-60 inline-flex">
      <div className="FanaticksLogo h-[34px] justify-center items-center gap-2 flex">
        <div className="Fanaticks black text-zinc-400 text-[32px] font-normal font-['Quanta Grotesk Pro']">
          Fanaticks
        </div>
      </div>
      <div className="Frame3 justify-center items-center gap-[29px] flex">
        <Link
          to="/"
          className="text-black text-lg font-normal font-['Space Grotesk'] leading-[27px]">
          Home
        </Link>
        <Link
          to="/about"
          className="text-black text-lg font-normal font-['Space Grotesk'] leading-[27px]">
          About
        </Link>
        <Link
          to="/discover"
          className="text-black text-lg font-normal font-['Space Grotesk'] leading-[27px]">
          Discover
        </Link>
        <Link
          to="/create-event"
          className="text-black text-lg font-normal font-['Space Grotesk'] leading-[27px]">
          Create Event
        </Link>
      </div>
      <div className="ConnectWalletButton w-[204px] px-5 py-6 rounded-[999px] border border-black justify-start items-center gap-2 flex">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default NavBar;
