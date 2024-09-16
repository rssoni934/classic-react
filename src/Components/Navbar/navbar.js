import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png' 
import styles from "./navbar.module.css"
import GlobalStyle from "../../index.module.css"

function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false) 
    })
    return () => {
      
    }
  }, [])
  

  return (
    <nav className={`${GlobalStyle.container} ${sticky ? styles.darkNav : ''}`}>
      <img src={logo} alt='Logo' className={styles.logo}/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className={GlobalStyle.btn}>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
