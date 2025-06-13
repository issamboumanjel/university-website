import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6713b7c5-ec7f-4fae-8ebc-e46342a0fe7a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
        <p>Feel free to reach out through contact form or 
            find our contact information below. Your feedback, 
            questions, and suggestions are important to us we strive exceptionnel service
            to our university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" /> issamboumanjel@gmail.com </li>
            <li><img src={phone_icon} alt="" />+212 640298482  </li>
            <li><img src={location_icon} alt="" />N 33  AGADIR, AIT MELLOUL, MOROCCO  </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Etre your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Entre your mobile' required />
            <label>Write your message here</label>
            <textarea name="message"  rows="6" placeholder='Entre your message' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

