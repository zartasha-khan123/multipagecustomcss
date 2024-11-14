import React from 'react'
import styles from './footer.module.css'
import { ibmPlexSerif, inter } from '@/font';
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';


function footer() {
  return (
    <div>
      <section className={`${styles.footer} ${inter.className}`}>
      <div className={styles.leftfooter}>
        <h1>Urban-S</h1>
        <p className={ibmPlexSerif.className}>SOCIAL MEDIA</p>
       <div className={styles.icons}>
        <IoLogoFacebook size={35} color='blue'/>
        <FaXTwitter size={30} color='purple'/>
        <BsInstagram size={30} color='red'/>
        </div>
</div>
        <div className={styles.shop}>
            <h1>SHOP</h1>
            <ul>
                <li>Product</li>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Release</li>
            </ul>
        </div>


        <div className={styles.company}>
            <h1>COMPANY</h1>
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>News</li>
                <li>Support</li>
            </ul>
        </div>

       <div className={styles.submit}>

        <h1 style={{fontStyle:"italic",color:"#3ECFDA",fontSize:"20px",fontWeight:"bold"}}>STAY UP TO DATE</h1>
       
        <div className={styles.inputdiv}>
            <br/>
            <input type='text' placeholder='Enter your email' className={styles.input}/>
            <button>SUBMIT</button>
        </div>

       </div>
      </section>
    </div>
  )
}

export default footer
