import Image from "next/image"
import React from 'react'
import styles from "../styles/PizzaCard.module.css"

function PizzaCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imgCard}>
        <Image src="/../public/img/pizza.png" height={500} width={500}/>
      </div>
      <h1 className={styles.title}>Campagnola</h1>
      <h3 className={styles.price}>$19.90</h3>
      <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default PizzaCard