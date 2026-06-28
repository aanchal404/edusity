import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>

      <section id="home">
        <Hero/>
      </section>

      <div className='container'>
        <section id="program">
          <Title subTitle='Our PROGRAM' title='What We Offer'/>
          <Programs/>
        </section>

        <section id="about">
          <About/>
        </section>

        <section id="campus">
          <Title subTitle='Gallery' title='Campus Photos'/>
          <Campus/>
        </section>

        <section id="testimonials">
          <Title subTitle='TESTIMONIALS' title='What Students Says'/>
          <Testimonials/>
        </section>

        <section id="contact">
          <Title subTitle='Contact Us' title='Get In Touch'/>
          <Contact/>
        </section>

        <Footer/>
      </div>
    </div>
  )
}

export default App