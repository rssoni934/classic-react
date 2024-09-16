import React from 'react'
import styles from './about.module.css'
import aboutImg from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_left}>
        <img src={aboutImg} alt='image' className={styles.aboutImg}/>
        <img src={playIcon} alt='play icon' className={styles.playIcon}/>
      </div>
      <div className={styles.about_right}>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p> Dolores diam vero kasd kasd erat elitr ipsum diam magna, vero accusam rebum stet sit lorem dolor, labore vero diam. </p>
        <p> Dolores diam vero kasd kasd erat elitr ipsum diam magna, vero accusam rebum stet sit lorem dolor, labore vero diam. </p>
        <p> Dolores diam vero kasd kasd erat elitr ipsum diam magna, vero accusam rebum stet sit lorem dolor, labore vero diam. </p>
      </div>
    </div>
  )
}

export default About
