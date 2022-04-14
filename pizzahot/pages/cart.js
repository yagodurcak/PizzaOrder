import Image from "next/image"
import React from 'react'
import styles from "../styles/Cart.module.css"

function cart() {
  return (
    <div className={styles.container}>
      <div className={styles.allContainer}>
        <div className={styles.leftContainer}>
          <table className={styles.tableContainer}>
            <tr className={styles.headContainer}>
              <th className={styles.headTable}>Product</th>
              <th className={styles.headTable}>Name</th>
              <th className={styles.headTable}>Extras</th>
              <th className={styles.headTable}>Price</th>
              <th className={styles.headTable}>Quantity</th>
              <th className={styles.headTable}>Total</th>
            </tr>
            <tr>
              <td className={styles.itemTable}>
                <div className={styles.imgTable}>
                  <Image src={"/img/pizza.png"} alt="" height={100} width={100} />
                </div>
              </td>
              <td className={styles.itemTable}>
                <h4>Coralzo</h4>
              </td>
              <td className={styles.itemTable}>
                <h4>Lorem ipsum dolor sit.</h4>
              </td>
              <td className={styles.itemTable}>
                <h4>$ 19.90</h4>
              </td>
              <td className={styles.itemTable}>
                <h4>2</h4>
              </td>
              <td className={styles.itemTable}>
                <h4>$ 39.80</h4>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.totalContainer}>
            <h1 className={styles.titleOrder}>Cart Total</h1>
            <h4><b>Subtotal:</b> $79.60</h4>
            <h4><b>Discount:</b> $0.00</h4>
            <h4><b>Total:</b> $79.60</h4>
            <button className={styles.buttonOrder}>CHECK OUT NOW</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default cart