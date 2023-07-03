import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/16354637/pexels-photo-16354637/free-photo-of-city-woman-in-pants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Digital Storytellers
          </h1>

          <h2 className={styles.imgText}>
            Handcrafting award winning digital experiences
          </h2>

        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.description}>
          "Welcome to our little corner of the internet, where beauty and inspiration collide. 
          Here, we believe that life is a canvas, and each day is an opportunity to paint it 
          with vibrant colors, breathtaking moments, and unforgettable experiences. Join us on this 
          journey as we celebrate the extraordinary in the ordinary and discover the beauty that surrounds us."

          <br />
          <br />

        In a world that often rushes by in a blur, we invite you to pause, take a deep breath, 
        and immerse yourself in the beauty of the present moment. Let your senses awaken as you 
        explore our collection of exquisite photographs, captivating stories, and thought-provoking art. 
        Together, let's create a sanctuary of beauty and ignite the spark of inspiration within.
          </p>

        </div>
        <div className={styles.item}>
          <h1 className={styles.title}> What We Do ?</h1>
          <p className={styles.description}>
          "Life is a tapestry woven with the threads of moments, emotions, and connections. 
          In this digital realm, we strive to unravel the stories that make us human, to celebrate diversity,
          and to showcase the beauty of the human spirit. We believe that every person has a unique story worth 
          telling, and we invite you to join our community as we weave together a vibrant tapestry
          of shared experiences and heartfelt connections"
          
          <br />
          <br /> - Dynamic Web applications
          <br />
          <br /> - Static Websites
          <br />
          <br /> - AI Image Processing
          <br />
          <br /> - Mobile Development
          </p>
          <button url="/contact" text="Contact" />
        </div>
        </div>
      
    </div>
  )
}

export default About;
