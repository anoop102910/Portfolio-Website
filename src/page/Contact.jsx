import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import Lottie from "lottie-react";
import animationData from "../assets/message.json"
import emailjs from '@emailjs/browser';


function Contact() {
  return (
    <div id="contact" className="mt-32 ">
      <h1 className="h1-primary text-center">Contact me</h1>
      <div className="flex justify-between flex-1 mt-10 flex-col lg:flex-row">
        <Lottie animationData={animationData} />
        {/* <Details /> */}
        <MessageForm />
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="w-[50%] mt-32 space-y-10 hidden md:block">
      <DetailCard label={"Contact"} value={"6388175878"}>
        <BsTelephone size={20} />
      </DetailCard>
      <DetailCard label={"Email"} value={"anoopsingh1729@gmail.com"}>
        <HiOutlineMail size={20} />
      </DetailCard>
      <DetailCard label={"Address"} value={"Kanpur, Uttar Pradesh"}>
        <IoLocationOutline size={20} />
      </DetailCard>
    </div>
  );
}

function DetailCard({ children, label, value }) {
  return (
    <div className="flex items-center py-3 pl-4 pr-12 w-full max-w-[350px] bg-primary-700 rounded-md shadow-md border-t-2 border-primary-600">
      <div className="p-4 rounded-md bg-primary-600 border-t-2 border-primary-500 mr-5">{children}</div>
      <div>
        <h3 className="text-[0.97rem] text-gray-400 ">{label}</h3>
        <h4 className="font text-[0.95rem]">{value}</h4>
      </div>
    </div>
  );
}
function MessageForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="glass-effect mx-auto mt-10 w-full md:w-auto">
      <form action="https://api.web3forms.com/submit" method="POST" className="mx-auto w-full lg:w-[550px]" action="">
        <input type="hidden" name="access_key" value="d2852544-bcd1-4596-94eb-de4ed9e638a2">
        <div className="mt-8 flex gap-10 flex-col lg:flex-row">
          <Input type="number" label={"Full Name*"} placeholder={"Enter Your name"} className={"mt-4"}>
            <BsPerson size={25}/>
          </Input>
          <Input label={"Email*"} placeholder={"Enter Your email"} className={"mt-4"}>
            <HiOutlineMail size={25} />
          </Input>
        </div>
        <div className="mt-8">
          <label htmlFor="message" className="ml-4">
            Message*
          </label>
          <textarea className="form-textarea" placeholder="Enter your message" rows={8} type="text" />
        </div>
        <div className="btn-secondary   mx-auto mt-4 flex  items-center w-min gap-x-5">
          <IoIosSend size={20} />
          <input className="" value={"Send Message"} type="submit" />
          
        </div>
      </form>
    </div>
  );
}
function Input({ label, placeholder, className, children }) {
  return (
    <div>
      <label htmlFor="name" className={`${className}`}>
        {label}
      </label>
      <div className="flex items-center border rounded-md border-slate-500 shadow-md gap-x-3 px-4 py-2  mt-2  ">
        {children}
        <input className="w-full   text-[0.9rem] bg-transparent outline-none" placeholder={placeholder} type="text" required/>
      </div>
    </div>
  );
}

export default Contact;
