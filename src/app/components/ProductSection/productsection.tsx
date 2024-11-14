import React from 'react'
import styles from './productsection.module.css'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { CardData } from '@/app/constant/cards'

function ProductSection() {
  return (
    <div>
   
      <section className={styles.productsection}>

  {CardData.map((item,index)=>{
    return (

        <Link href={`/joinus/ ${item.id}`} key={index}>
 <div className={styles.card} key={index}>
    <div className={styles.topimgdiv} style={{backgroundColor:item.backgroundColor}}>
      <Image src={item.src} width={300} height={600} alt={'product'} className={styles.cardimg}></Image>
    </div>
    <div className={styles.bottomtextdiv}>
<div className={styles.stars}>
  {[...Array(item.rating)].map((_ ,index) => {

    return <FaStar color='orange'size={32} key={index}/>
  })}

</div>

<p style={{fontSize:'18px'}}>{item.heading}</p>
<p style={{fontWeight:'600'}}>{item.price}</p>

    </div>
</div>
</Link>
)
})}






      

        







      </section>
    </div>
  )
}

export default ProductSection
