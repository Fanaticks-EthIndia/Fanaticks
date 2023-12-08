import { Link } from 'react-router-dom';

import '../styles/Navbar.css'
import ConnectWallet from './ConnectWallet';

const NavBar = () => {


  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/create-event">Create Event</Link></li>
        <li>
           <ConnectWallet />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;