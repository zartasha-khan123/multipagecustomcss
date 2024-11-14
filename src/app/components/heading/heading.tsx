import React from 'react'
import styles from './heading.module.css'
function Heading() {
  return (
    <div className={styles.heading}>
        <h1>Our Product</h1>
      <div className={styles.underline}></div>
      <p>Here you can check our new products with fair price on the market urban...</p>
    </div>
  )
}

export default Heading
