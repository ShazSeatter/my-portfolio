import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



import "../App.css";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jzu1sp7', 'template_d4btqh5', form.current, 'AU5czz9aY1cuYkI75')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact" className="w-3/4 ml-16">
         <h3 className="section-headers mt-20"><span className="about-heading"></span>Contact</h3>
         <p className="text-[1.6rem] font-Sintony mt-4">Get in touch 👋 </p>


        <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap mt-8 bg-gray-300 p-12 rounded mb-20">
            <label className="contact-font">Your name</label>
            <input className="contact-form" type="text" name="user_name" />
            <label className="contact-font">Your email</label>
            <input className="contact-form" type="email" name="user_email" />
            <label className="contact-font">Message</label>
            <textarea className="contact-form mb-6" name="message" />
            <input className="contact-form contact-font bg-white hover:bg-opacity-75" type="submit" value="Send" />
            </div>
        </form>
    </div>
  );
}

export default Contact;