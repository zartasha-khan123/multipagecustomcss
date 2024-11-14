
import React from 'react'
import Image from 'next/image'
import styles from './container.module.css'
import { FcAlarmClock } from "react-icons/fc";


function Container() {
  return (
   
<div>
    <div className={styles.heading}>HURRY UP</div>
    <div className={styles.container}>
    <div className={styles.iconLeft}>
    <FcAlarmClock className="animate-bounce" size={80} />
  </div>
    {/* <FcAlarmClock  className='animate-bounce ' size={80}/> */}

   
<div className={styles.imageContainer}>
  <Image
    src="/images/Banner 1.png"
    width={600}
    height={1200}
    alt="sales"
    className={styles.responsiveImage}
  />
</div>
<div className={styles.iconRight}>
    <FcAlarmClock className="animate-bounce" size={80} />
  </div>

</div>
</div>
  )
}

export default  Container

