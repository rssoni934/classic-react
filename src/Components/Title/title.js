import React from 'react'
import styles from './title.module.css'

function Title({subTitle = "", title = ""}) {
  return (
    <div className={styles.title}>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title
