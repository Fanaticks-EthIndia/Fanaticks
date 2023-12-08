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
    <div className="w-[204px] h-[46px] px-5 py-6 rounded-[999px] border border-white justify-start items-center gap-2 inline-flex">
      {!account ? (
        <div className="wallet-button" onClick={connectWallet}>
          <div className="justify-center items-center gap-2 flex">
            <div className="w-6 h-6 relative wallet-icon" />
            <div className="text-black text-lg font-normal font-['Space Grotesk'] leading-[27px]">
              Connect Wallet
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red">{account}</p>
      )}
    </div>
  );
};

export default ConnectWallet;
