import React, {useState} from 'react';

export default function connectToLiberty0() {

 const chainId = '0x1F91';
 const rpcURL = 'https://liberty20.shardeum.org/';
 const networkName = 'Shardeum Liberty 2.X';
 const currencyName = 'SHM';
 const currencySymbol = 'SHM';
 const explorerURL = 'https://explorer-liberty20.shardeum.org/';

 const addNetwork = async () => {
   if (!window.ethereum) {
     console.error('Metamask not detected');
     return;
   }
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
   // refresh
   //  window.location.reload();
  };

  return (

    <button onClick={addNetwork}>Connect to Liberty 2.1</button>    

  );

}
