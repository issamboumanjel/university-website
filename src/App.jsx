import { useState } from 'react'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
// import Programs from './Components/Programs/Programs.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Title from './Components/Title/Title.jsx'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx'

const App = () => {

  const[playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What we offre'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact US' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App