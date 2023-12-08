import { useEffect, useState } from "react";

const ConnectWallet = () => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
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
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
      });
    }
  }, []);

  return (
    <div>
      {!account ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <button className="btn btn-primarybg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <p>{account}</p>
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
