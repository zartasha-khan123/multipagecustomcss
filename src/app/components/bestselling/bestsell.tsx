"use client"

import React, { useEffect } from 'react'
import styles from './bestsell.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Image  from 'next/image'
import {aBeeZee } from '@/font'
import { FaStar } from "react-icons/fa";
import {CardData} from '@/app/constant/cards'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'


function BestSelling() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay({delay: 2000,stopOnInteraction
        :false,stopOnMouseEnter
        :true})])

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])
  return (
    <div>

         <div className={styles.whatsnew}>
          <h1 style={{fontStyle:"italic",color:"#3ECFDA",fontSize:"30px",fontWeight:"bold"}}>WHATS NEW</h1>
          <Image src='/images/download (2).png' width={300} height={100} alt='arrow' ></Image>
          <Image src='/images/download (3).png' width={300} height={100} alt='arrow'></Image>
          <Image src='/images/images.png' width={300} height={100} alt='arrow'></Image>
        </div> 
      <section className={styles.bestselling}>
<h1>BEST SELLING</h1>
<div className={styles.centerul}>
   <ul className={styles.ul}>
    <li>NEW ARRIVALS</li>
    <li style={{color:"#3ECFDA",textDecoration:"underline"}}>SALES</li>
    <li>ACCESSORIES</li>
   </ul>
</div>

<div className={`${styles.carddiv} ${styles.embla}`}ref={emblaRef}>
<div className={styles.embla_container}>

{CardData.map((data)=>{

return(

<div className={styles.embla_slide} key={data.id}>
    <div className={styles.imgdiv} style={{backgroundColor:data.backgroundColor}}>
  <Image src={data.src} width={371} height={606} alt='kids' className={styles.cardimgs}>
  </Image>
    </div>

    <div className={styles.textdiv}>
        <h1 className={aBeeZee.className}>{data.heading}</h1>

       <div className={styles.price}>
         <p> {data.price}  |  {data.rating}.0 <FaStar size={25} color='yellow' className={styles.star}/>
        </p></div>

</div>
</div>

)
})}

</div>
</div>

<Link href={'/joinus'}><button className={styles.button}>SEE MORE</button></Link>

<div className={styles.container}>
    <h1 style={{fontStyle:"irish grover",fontSize:"30px",fontWeight:"bold",gap:'1rem'}}>SHOP BY CATEGORY</h1>
    <div style={{display:"flex",gap:"70px"}}>
    <div className={styles.imageWrapper}>
    <Image src='/images/img3.webp' width={300} height={200} alt='arrow'></Image>
    <p className={styles.imageText}>WOMEN</p>
    </div>
    <div className={styles.imageWrapper}>
          <Image src='/images/img.jpg' width={300} height={200} alt='arrow'></Image>
          <p className={styles.imageText}>GIRLS</p>
          </div>

          <div className={styles.imageWrapper}>
          <Image src='/images/img4.webp' width={300} height={200} alt='arrow'></Image>
          <p className={styles.imageText}>MEN</p>
          </div>

</div>
</div>




</section>
</div>





   
   
  )
}

export default BestSelling
