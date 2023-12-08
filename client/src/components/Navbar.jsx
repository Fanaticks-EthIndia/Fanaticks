import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";

const NavBar = () => {
  return (
    <div className="Navbar w-full bg-white fixed top-0 z-50">
      <div className="w-[1175px] mx-auto h-[46px] flex justify-between items-center">
        <div className="FanaticksLogo h-[34px] flex items-center">
          <div className="Fanaticks black text-zinc-400 text-[32px] font-normal font-['Quanta Grotesk Pro']">
            Fanaticks
          </div>
        </div>

        <div className="Frame3 flex items-center space-x-8">
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

        <div>
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
