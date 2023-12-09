import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import logo from "../assets/images/logo.svg";

const NavBar = () => {
  return (
    <div className="Navbar w-full fixed top-2 z-50">
      <div className="w-[1175px] mx-auto h-[46px] flex justify-between items-center">
        <div className="FanaticksLogo h-[34px] flex justify-center items-center gap-2">
          <img src={logo} className="h-8 w-fit" />
          <Link
            to="/"
            className="Fanaticks black  text-[32px] font-normal font-secondary text-primary" >

            Fanaticks
          </Link>
        </div>
        <div className="Frame3 flex items-center space-x-8 font-primary">
          <Link
            to="/#about"
            className="text-white text-lg font-normal leading-[27px]">
            About
          </Link>
          <Link
            to="/discover"
            className="text-white text-lg font-normal leading-[27px]">
            Discover
          </Link>
          <Link
            to="/create-event"
            className="text-white text-lg font-normal leading-[27px]">
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
