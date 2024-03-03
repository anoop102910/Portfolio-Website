import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import toast from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init("HM9PVhZc50PTQp0IP"), []);
  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm("service_ruwxdff", "template_lsygyyv", form.current, "HM9PVhZc50PTQp0IP").then(
      () => {
        console.log("SUCCESS!");
        toast.success("Message sent successfully");
        setLoading(false);
      },
      error => {
        console.log("FAILED...", error.text);
        toast.error("Something went wrong")
        setLoading(false);
      }
    );
  };

  return (
    <div className="glass-effect mx-auto mt-10 w-full md:w-auto">
      <form ref={form}  className="mx-auto w-full lg:w-[550px]" action="">
        <div className="mt-8 flex gap-10 flex-col lg:flex-row">
          <Input
            type="number"
            name="name"
            label={"Full Name*"}
            placeholder={"Enter Your name"}
            className={"mt-4"}
          >
            <BsPerson size={25} />
          </Input>
          <Input label={"Email*"} name="email" placeholder={"Enter Your email"} className={"mt-4"}>
            <HiOutlineMail size={25} />
          </Input>
        </div>
        <div className="mt-8">
          <label htmlFor="message" className="ml-4">
            Message*
          </label>
          <textarea
            className="form-textarea"
            name="message"
            placeholder="Enter your message"
            rows={8}
            type="text"
          />
        </div>
        <div onClick={sendEmail} className="btn-secondary   mx-auto mt-4 flex  items-center w-min gap-x-5">
          <IoIosSend size={20} />
          <input className="" value={loading ? "Sending..." : "Send Message"} type="submit" />
        </div>
      </form>
    </div>
  );
};

function Input({ label, placeholder, className, children, name }) {
  return (
    <div>
      <label htmlFor={name} className={`${className}`}>
        {label}
      </label>
      <div className="flex items-center border rounded-md border-slate-500 shadow-md gap-x-3 px-4 py-2  mt-2  ">
        {children}
        <input
          name={name}
          className="w-full   text-[0.9rem] bg-transparent outline-none"
          placeholder={placeholder}
          type="text"
          required
        />
      </div>
    </div>
  );
}

export default ContactUs;
