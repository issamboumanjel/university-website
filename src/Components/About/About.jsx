import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow&apos;s Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university&apos;s 
            comperhensive education programs. Our cutting-edge curreculum
            is designed to empower students with the knowledge, skills, and experiences 
            needed to excel in the dynamic field of education.
        </p>
        <p>Embark on a transformative educational journey with our university&apos;s 
            comperhensive education programs. Our cutting-edge curreculum
            is designed to empower students with the knowledge, skills, and experiences 
            needed to excel in the dynamic field of education.
        </p>
        <p>Embark on a transformative educational journey with our university&apos;s 
            comperhensive education programs. Our cutting-edge curreculum
            is designed to empower students with the knowledge, skills, and experiences 
            needed to excel in the dynamic field of education.
        </p>
      </div>
    </div>
  )
}

export default About
