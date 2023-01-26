import React, {useState} from 'react';

export default function connectToLiberty0() {

  const chainId = '0x1f91';
  const rpcURL = 'https://liberty20.shardeum.org/';
  const networkName = 'Shardeum Liberty 2.X';
  const currencyName = 'SHM';
  const currencySymbol = 'SHM';
  const explorerURL = 'https://explorer-liberty20.shardeum.org/';

  const addNetwork = async () => {
    if (!window.ethereum) {
      alert("Metamask not detected! Install Metamask then try again.")
      return;
    }
    if (window.ethereum.networkVersion == 8081) {
      alert("You are already connected to Liberty 2.X (chainId 8081).", )
      return;
    }
    try{
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: chainId,
            chainName: networkName,
            rpcUrls: [rpcURL],
            blockExplorerUrls: [explorerURL],
            nativeCurrency: {
              name: currencyName,
              symbol: currencySymbol, // 2-6 characters long
              decimals: 18,
            },
          },
        ],
      });
    } catch (error) {
      alert("Failed to add the network with wallet_addEthereumChain request. Try using Metamask or BitKeep instead of the Brave Wallet. Also try adding the network on https://chainlist.org/ or manually. Error log: " + error.message)
    }

  };

  return (
    <button className="button buttonHighContrast" onClick={addNetwork}>Connect to Liberty 2.X</button>
  );

}
