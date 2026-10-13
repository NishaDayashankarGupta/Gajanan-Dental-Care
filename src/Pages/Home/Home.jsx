import React from 'react'
import Hero from '../../components/Hero/Hero'
import Time from '../../components/Time/Time'
import About from '../../components/About/About'
// import Services from '../../components/Services/Services'
import Services2 from '../../components/Services2/Services'
import Contact from '../../components/Contact/Contact'
import BeforeAfter from '../../components/BeforeAfter/BeforeAfter'
import FAQ from '../../components/FAQ/FAQ'

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      {/* <Services/> */}
      <Services2/>
      <Time/>
      <BeforeAfter/>
      <Contact/>
      <FAQ/>

    </div>
  )
}

export default Home
