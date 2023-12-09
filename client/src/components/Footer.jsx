import logo from "../assets/images/logo.svg"
import ethindia from "../assets/images/EthIndia 2023.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-drakGray h-80">
      <div className="flex flex-col mx-10 my-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 ">
              <img src={logo} className="h-8 w-fit" />
              <h1 className="text-secondary font-secondary text-3xl">Fanaticks</h1>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-white font-secondary text-2xl">Built at</h1>
              <img src={ethindia} className="h-8 w-fit" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-white font-primary text-md font-medium">
            <h1>About</h1>
            <h1>Discover</h1>
            <h1>Create Event</h1>
            <h1>Connect Wallet</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
