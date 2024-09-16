import React from 'react'
import Navbar from '../Navbar/navbar'
import Hero from '../Hero/hero'
import Programs from '../Programs/programs'
import Title from '../Title/title'
import GlobalStyle from "../../index.module.css";
import About from '../About/about'


function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <div className={GlobalStyle.container}>
          <Title subTitle='Our Program' title='What we Offer'/>
          <Programs />
          <About />
        </div>

    </div>
  )
}

export default Home
