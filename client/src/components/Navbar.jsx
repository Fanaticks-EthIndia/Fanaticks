import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css'
import ConnectWallet from './ConnectWallet';

const NavBar = () => {
  const [showConnectWallet, setShowConnectWallet] = useState(false);

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/create-event">Create Event</Link></li>
        <li>
          <button onClick={() => setShowConnectWallet(true)}>Connect Wallet</button>
          {showConnectWallet && <ConnectWallet />}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;