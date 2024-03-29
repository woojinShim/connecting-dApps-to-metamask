import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { ethers } from 'ethers'
// connect to metamask
// execute a function



export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState();

  async function connect() {
    if(typeof window.ethereum !== 'undefined') {
      try{
        await ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        let connectedProvider = new ethers.providers.web3Provider(window.ethereum);
        setSigner(connectedProvider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }

  }


  return (
    <div className={styles.container}>
      Hello Lewis!
      {isConnected ? <p>Connected to Metamask</p> : <p>Not Connected to Metamask</p>}
      <button onClick={() => connect()}>Connect!</button>
    </div>
  );
}
