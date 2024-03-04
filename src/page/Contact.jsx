import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/message.json"
import ContactUs from "../components/ContactUs";


function Contact() {
  return (
    <div id="contact" className="mt-32 ">
      <h1 className="h1-primary text-center">Contact me</h1>
      <div className="flex justify-between flex-1 mt-10 flex-col lg:flex-row">
        <Lottie animationData={animationData} />
        <ContactUs/>
      </div>
    </div>
  );
}

export default Contact;
