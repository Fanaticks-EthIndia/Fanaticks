import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";

const NavBar = () => {
  return (
    <div className="Navbar w-fullfixed top-0 z-50">
      <div className="w-[1175px] mx-auto h-[46px] flex justify-between items-center">
        <div className="FanaticksLogo h-[34px] flex items-center">
          <Link
            to= "/"
            className="Fanaticks black text-zinc-400 text-[32px] font-normal font-['Quanta Grotesk Pro']" >
            Fanaticks
          </Link>
        </div>
        <div className="Frame3 flex items-center space-x-8 font-primary">
          <Link
            to="/about"
            className="text-black text-lg font-normal leading-[27px]">
            About
          </Link>
          <Link
            to="/discover"
            className="text-black text-lg font-normal leading-[27px]">
            Discover
          </Link>
          <Link
            to="/create-event"
            className="text-black text-lg font-normal leading-[27px]">
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
