import  { useEffect, useState } from 'react';
import '../styles/ConnectWallet.css';

const ConnectWallet = () => {
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Failed to connect to Metamask");
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0]);
      });
    }
  }, []);

  return (
    <div className="ConnectWalletButton">
      {!account ? (
        <div className="wallet-button" onClick={connectWallet}>
          <div className="wallet-icon"></div>
          <div className="wallet-text">Connect Wallet</div>
        </div>
      ) : (
        <p>{account}</p>
      )}
    </div>
  );
};

export default ConnectWallet;