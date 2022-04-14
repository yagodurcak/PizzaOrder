import React, {useState} from 'react'

import Image from 'next/image'
import styles from "../styles/Featured.module.css"

function Featured() {

    const [index, setIndex] = useState(0);

    const imagenes = [
        "/../public/img/featured.png",
        "/../public/img/featured2.png",
        "/../public/img/featured3.png",
    ]

    const slide = (direction) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
        
    }
    console.log(index);
    console.log(-100*index);




  return (
      <div className={styles.container1}>
          <div className={styles.arrowContainer} style={{ left: 0, zIndex: 600 }} onClick={() => slide("l")}>
              <Image src="/../public/img/arrowl.png" layout='fill' objectFit="contain"  />
          </div>
          <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
              {imagenes.map((imagen, i) => (
                  <div className={styles.imgContainer} key={i}>
                      <Image src={imagen}  layout='fill' objectFit="contain"  />
                  </div>
              ))}
          </div>
          <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => slide("r")}>
              <Image src="/../public/img/arrowr.png" layout='fill' objectFit="contain"  />

          </div>
      </div>
  )
}

export default Featured