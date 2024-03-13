import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../styles/contact_style/contact.scss";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_reuk4xb', 'template_jnigo1g', form.current, {
        publicKey: 'fstDaMZLnST4Savgq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      alert ('Your message has been successfully sent.');
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      
      <label className='mt-5 mb-3 d-block'>Name</label>
      <input className="client_input" type="text" name="from_name" />
      
      <label className='mt-4 mb-3 d-block'>Email</label>
      <input className="client_input" type="email" name="from_email" />
      <label  className='mt-4 mb-3 d-block'>Phone Number</label>
      <input className="client_input" type="text" name="from_phoneNumber" />
      <label  className='mt-4 mb-3 d-block'>Subject</label>
      <input className="client_input" type="text" name="subject" />
      <label  className='mt-4 mb-3 d-block'>Message</label>
      <textarea className="client_input message" name="message" />
      <input className='submit_button mt-4 mb-4 d-block' type="submit" value="Submit" />
    </form>
  );
};