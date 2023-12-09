import { useEffect, useState } from "react";

const ConnectWallet = () => {
  const [account, setAccount] = useState("");
  const [copied, setCopied] = useState(false);

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

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 200); // Reset after 2 seconds
  };

  const truncatedAddress = account.substring(0, 9) + "...";

  return (
    <div>
      {!account ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <div className="relative inline-block">
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full relative"
            onClick={copyToClipboard}>
            <p>{truncatedAddress}</p>
            {copied && (
              <div className="absolute top-0 right-0 mt-2">
                <div className="bg-gray-800 text-white py-1 px-2 rounded opacity-75">
                  Copied!
                  <span className="text-gray-800">&#9654;</span>
                </div>
              </div>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
