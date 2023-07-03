import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Your view my view on products</h1>
        <p className={styles.description}>
          Creating free space virtual reality by binding 
          external entities in the world of IT.
        </p>
        <button className={styles.button}> Similar works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Homepage" className={styles.img} />
      </div>
      
    </div>
    
  )
};
