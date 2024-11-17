
import Image from 'next/image';
import React from 'react'
import styles from './herosection.module.css'
import { inknutAntiqua } from '@/font';
function HeroSection() {
  return (
<div>
    <section className={styles.herosection}>
      <div className={styles.heroLeft}>
        <h1 className={inknutAntiqua.className} style={{textDecoration:"underline"}}>Urban Studio</h1>
        <h1  className={inknutAntiqua.className} style={{color:"black",fontWeight:"bold"}}>Winter</h1><h1 className={inknutAntiqua.className}style={{color:"#3ECFDA"}}>2024-2025</h1>
        <p className={styles.p} style={{color:"black",fontWeight:"bold"}}>Urban Sole fabric is of high quality, designed to be both comfortable and durable. 
        It combines modern designs and style, 
        making it not only comfortable to wear but also fashionable.</p>
      
      
      <button className={styles.button}>EXPLORE NOW</button>
     
      </div>
  <div className={styles.heroRight}>
<div className={styles.heroRightImg}>
    <Image src='/images/profile.png' width = {550} height = {599}  alt ='profile'>
    </Image>
</div>
         
  </div>
    </section>
</div>
  )

}

export default HeroSection

