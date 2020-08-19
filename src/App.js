// App.js

import React from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'

function App() {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()
  console.log(wallet)

  return (
    <>
      <h1>Wallet</h1>
      {wallet.status === 'connected' ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <button onClick={() => wallet.reset()}>disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.connect()}>MetaMask</button>
          {/* <button onClick={() => wallet.connect('frame')}>Frame</button>
          <button onClick={() => wallet.connect('portis')}>Portis</button> */}
        </div>
      )}
    </>
  )
}

// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      // This is how connectors get configured
      portis: { dAppId: 'my-dapp-id-123-xyz' },
    }}
  >
    <App />
  </UseWalletProvider>
)