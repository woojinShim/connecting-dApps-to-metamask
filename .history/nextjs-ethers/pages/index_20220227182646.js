import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// connect to metamask
// execute a function



export default function Home() {
  async function connect() {
    if(typeof window.ethereum !== 'undefined') {
      try{
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      }

    }
  }


  return (
    <div className={styles.container}>
      Hello Lewis!
    </div>
  )
}
