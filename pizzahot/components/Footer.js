import Image from "next/image"
import React from 'react'
import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <Image src="/../public/img/bg.png" layout="fill"/>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.subItemContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, aliquam quae!</h1>
        </div>
        <div className={styles.subItemContainer}>
          <h3 className={styles.subTitle}>FIND OUR RESTAURANTS</h3>
          <p className={styles.desc}>Lorem ipsum dolor sit amet. <br /> Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit amet. </p>
          <p className={styles.desc}>Lorem ipsum dolor sit amet. <br /> Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit amet. </p>
          <p className={styles.desc}>Lorem ipsum dolor sit amet. <br /> Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit amet. </p>
          <p className={styles.desc}>Lorem ipsum dolor sit amet. <br /> Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit amet. </p>
        </div>
        <div className={styles.subItemContainer}>
          <h3 className={styles.subTitle}>Working HOurs</h3>
      <p className={styles.desc}>Lorem ipsum dolor sit amet. <br /> Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit amet. </p>
          <p className={styles.desc}>Lorem ipsum dolor sit amet. <br /> Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit amet. </p>
        </div>
        </div>
    </div>
  )
}

export default Footer