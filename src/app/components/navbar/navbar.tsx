// 'use client'
// import React from 'react'
// import styles from './navbar.module.css'
// import Link from 'next/link'
// import { motion,AnimatePresence } from 'framer-motion';
// import { TiThMenu } from 'react-icons/ti';


// function Navbar() {
//   const [open, setOpen] = React.useState<boolean>(false);
//   const showFunction = () => {
//     setOpen(!open)
//   };

//   return (
//    <>

//    <nav className={styles.nav}>
//    <h1>Urban-S</h1>
//    <AnimatePresence>
//     {open == true ? (
//     <motion.div className={`${styles.linksdiv} ${styles.adjust}`}
//       key={"menu"}
//       initial={{ height: 0, opacity: 0 }}
//       animate={{ height:'350px', opacity: 1 }}
//       exit={{ height:0, opacity: 0 }}
//       transition={{ duration: 0.4 }}
//     >


//  <ul>
//        <li><Link href="/" style={{fontWeight:'bold',color:'#365567'}}>Home</Link></li>
//        <li><Link href="/joinus">Shop</Link></li>
//        <li><Link href="/services">Our Services</Link></li>
//        <li><Link href="contact">Contact </Link></li>
//     </ul>


//     <Link href="/contact"><button>Login</button></Link>
//     </motion.div>
//     ) : (
//       < div className={`${styles.linksdiv}`}>
        
//  <ul>
//        <li><Link href="/" style={{fontWeight:'bold',color:'#365567'}}>Home</Link></li>
//        <li><Link href="/joinus">Shop</Link></li>
//        <li><Link href="/services">Our Services</Link></li>
//        <li><Link href="/contact">Contact </Link></li>
//     </ul>

//     <Link href={"/contact"}><button>Login</button></Link>
//       </div>
//     )}

//   </AnimatePresence>


//     <TiThMenu size={35} className={styles.menu} onClick={showFunction}/>

//    </nav>
//    </>
//   )
// }

// export default Navbar


'use client'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import { TiThMenu } from 'react-icons/ti';

function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);

  const showFunction = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Urban-S</h1>
        <AnimatePresence>
          {open ? (
            <motion.div
              className={`${styles.linksdiv} ${styles.adjust}`}
              key="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '350px', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ul>
                <li><Link href="/" className={styles.link}>Home</Link></li>
                <li><Link href="/joinus" className={styles.link}>Shop</Link></li>
                <li><Link href="/services" className={styles.link}>Our Services</Link></li>
                <li><Link href="/contact" className={styles.link}>Contact</Link></li>
              </ul>
              <Link href="/contact"><button className={styles.button}>Login</button></Link>
            </motion.div>
          ) : (
            <div className={styles.linksdiv}>
              <ul>
                <li><Link href="/" className={styles.link}>Home</Link></li>
                <li><Link href="/joinus" className={styles.link}>Shop</Link></li>
                <li><Link href="/services" className={styles.link}>Our Services</Link></li>
                <li><Link href="/contact" className={styles.link}>Contact</Link></li>
              </ul>
              <Link href="/contact"><button className={styles.button}>Login</button></Link>
            </div>
          )}
        </AnimatePresence>
        <TiThMenu size={35} className={styles.menu} onClick={showFunction} />
      </nav>
    </>
  );
}

export default Navbar;
