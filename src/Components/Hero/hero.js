import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
import styles from './hero.module.css'
import GlobalStyle from '../../index.module.css'

function Hero() {
  return (
    <div className={`${styles.hero} ${GlobalStyle.container}`}>
        <div className={styles['hero-text']}>
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in dynamic field of education</p>
            <button className={GlobalStyle.btn}>Explore more <img src={dark_arrow} alt='arrow'/></button>
        </div>
    </div>
  )
}

export default Hero
