import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// connect to metamask
// execute a function

if(typeof window.ethereum !== 'undefined') {
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions, //required
  });
}

export default function Home() {
  async function connect() {

  }


  return (
    <div className={styles.container}>
      Hello Lewis!
    </div>
  )
}
