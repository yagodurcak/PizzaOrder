import PizzaCard from './PizzaCard'
import React from 'react'
import styles from "../styles/PizzaList.module.css"

function PizzaList() {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eligendi esse commodi asperiores iusto numquam aspernatur quisquam consequatur, provident aut repudiandae dicta harum nam labore delectus temporibus, quia voluptatum id, dignissimos fuga consequuntur? Eum aperiam iure fugiat itaque tempora sint iusto velit soluta consectetur, voluptatum, eligendi laudantium deserunt autem in?</p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
      </div>
  )
}

export default PizzaList