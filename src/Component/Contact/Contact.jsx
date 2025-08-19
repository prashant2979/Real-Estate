import React from 'react';

function Contact() {
  return (
    <div
      id="contact"
      className=" py-20 px-4 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-2">
        Email: <a href="mailto:yourname@gmail.com" className="text-blue-600 underline">yourname@gmail.com</a>
      </p>
      <p className="mb-2">Phone: +1 (234) 567-890</p>
      <p>Address: 123 Main Street, Your City, Country</p>
    </div>
  );
}

export default Contact;
