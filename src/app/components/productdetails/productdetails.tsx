// import React from 'react'
// import styles from './productdetails.module.css'
// import Image from 'next/image'
// import {aBeeZee} from '@/font'
// import {CardData} from '@/app/constant/cards'
// function ProductDetails(props:{Cardid:string}) {

// const data=CardData.find((item)=>{return item.id == (props.Cardid) as unknown as number})


//   return (
//     <div>
//       <section className={styles.productdetails}>
//         <div className={styles.leftimg} style={{backgroundColor:data?.backgroundColor}}>

//        <Image src={data?.src || '/images/men.webp'} width={400} height={600} alt='product' className={styles.img}></Image>
//         </div>

//         <div className={styles.rightimg}>

//             <h1 className={aBeeZee.className}>{data?.heading}</h1>
//             <p> {data?.price}</p>
//              <div className={styles.cartdiv}>
//              <input type='number' value={1} />
//             <button>Add To Cart</button>
//             </div>

//             <p style={{fontSize:"30px"}}>Product Details</p>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut delectus quod, consectetur nisi, autem ea voluptatibus accusamus, 
//                 inventore deserunt enim quae. Voluptatem enim ipsa iste et voluptates perspiciatis, voluptatum quod.</p>


//         </div>
        
// </section>
      
//     </div>
//   )
// }

// export default  ProductDetails


'use client';
import React, { useState } from "react";
import styles from "./productdetails.module.css";
import Image from "next/image";
import { aBeeZee } from "@/font";
import { CardData } from "@/app/constant/cards";

function ProductDetails(props: { Cardid: string }) {
  const data = CardData.find((item) =>{return item.id == (props.Cardid) as unknown as number});

  
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div>
      <section className={styles.productdetails}>
        <div className={styles.leftimg} style={{ backgroundColor: data?.backgroundColor }}>
          <Image
            src={data?.src || "/images/men.webp"}
            width={400}
            height={600}
            alt="product"
            className={styles.img}
          ></Image>
        </div>

        <div className={styles.rightimg}>
          <h1 className={aBeeZee.className}>{data?.heading}</h1>
          <p>{data?.price}</p>
          <div className={styles.cartdiv}>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min={1}
            />
            <button>Add To Cart</button>
          </div>

          <p style={{ fontSize: "30px" }}>Product Details</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut delectus quod, consectetur nisi, autem ea voluptatibus
            accusamus, inventore deserunt enim quae. Voluptatem enim ipsa iste et voluptates perspiciatis, voluptatum quod.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
