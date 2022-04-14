import React, {useState} from 'react'

import Image from "next/image"
import styles from "../../styles/Product.module.css"

function Product() {


    const [size, setSize] = useState(0);

    const pizza = {
        id:1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 25.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illum id deserunt iste maxime magni Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illum id deserunt iste maxime magni"
    }



  return (
      <div className={styles.container}>
          <div className={styles.leftContainer}>
              <div className={styles.imgContainer}>
                  <Image src={pizza.img} layout="fill" />
              </div>
          </div>
          <div className={styles.rightContainer}>
              <div className={styles.productContainer}>
                  <h1 className={styles.title}>{pizza.name}</h1>
                  <h3 className={styles.price}>$ {pizza.price[size]}</h3>
                  <p className={styles.desc}>{pizza.desc}</p>
              </div>
                  <h2>Choose the size:</h2>
              <div className={styles.sizesContainer}>
                  <div className={styles.sizeContainer} onClick= {()=> setSize(0)}>
                      <Image src="/img/size.png" layout="fill" />
                      <h3 className={styles.number}>Small</h3>
                  </div>
                  <div className={styles.sizeContainer} onClick= {()=> setSize(1)}>
                      <Image src="/img/size.png" layout="fill" />
                      <h3 className={styles.number}>Medium</h3>
                  </div>
                  <div className={styles.sizeContainer} onClick= {()=> setSize(2)}>
                      <Image src="/img/size.png" layout="fill" />
                      <h3 className={styles.number}>Large</h3>
                  </div>
              </div>
              <div className={styles.orderContainer}>
                  <h2>Choose additional Ingredients</h2>
                  <div className={styles.additionalsContainer}>
                      <div className={styles.additionalContainer}>
                        <input 
                        type='checkbox'
                        id='double'
                        name='double'
                        className={styles.checkBox}
                        />
                        <label htmlFor="double">Double</label>
                      </div>
                      <div className={styles.additionalContainer}>
                        <input 
                        type='checkbox'
                        id='cheese'
                        name='cheese'
                        className={styles.checkBox}
                        />
                        <label htmlFor="cheese">Cheese</label>
                      </div>
                      <div className={styles.additionalContainer}>
                        <input 
                        type='checkbox'
                        id='onion'
                        name='onion'
                        className={styles.checkBox}
                        />
                        <label htmlFor="onion">Onion</label>
                      </div>
                      <div className={styles.additionalContainer}>
                        <input 
                        type='checkbox'
                        id='garlic'
                        name='garlic'
                        className={styles.checkBox}
                        />
                        <label htmlFor="garlic">Garlic</label>
                      </div>
                  </div>

              </div>
              <div className={styles.addContainer}>
                  <input className={styles.addBox} type="number" />
                  <button className={styles.addButton}>Add to cart</button>
              </div>
          </div>

      </div>
  )
}

export default Product