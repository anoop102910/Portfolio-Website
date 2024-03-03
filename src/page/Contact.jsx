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
        {/* <MessageForm /> */}
        <ContactUs/>
      </div>
    </div>
  );
}


// function MessageForm() {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "d2852544-bcd1-4596-94eb-de4ed9e638a2");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//     }
//   };
//   return (
//     <div className="glass-effect mx-auto mt-10 w-full md:w-auto">
//       <form onSubmit={onSubmit} className="mx-auto w-full lg:w-[550px]" action="">
//         <div className="mt-8 flex gap-10 flex-col lg:flex-row">
//           <Input type="number" label={"Full Name*"} placeholder={"Enter Your name"} className={"mt-4"}>
//             <BsPerson size={25}/>
//           </Input>
//           <Input label={"Email*"} placeholder={"Enter Your email"} className={"mt-4"}>
//             <HiOutlineMail size={25} />
//           </Input>
//         </div>
//         <div className="mt-8">
//           <label htmlFor="message" className="ml-4">
//             Message*
//           </label>
//           <textarea className="form-textarea" placeholder="Enter your message" rows={8} type="text" />
//         </div>
//         <div className="btn-secondary   mx-auto mt-4 flex  items-center w-min gap-x-5">
//           <IoIosSend size={20} />
//           <input className="" value={"Send Message"} type="submit" />
          
//         </div>
//       </form>
//     </div>
//   );
// }
// function Input({ label, placeholder, className, children }) {
//   return (
//     <div>
//       <label htmlFor="name" className={`${className}`}>
//         {label}
//       </label>
//       <div className="flex items-center border rounded-md border-slate-500 shadow-md gap-x-3 px-4 py-2  mt-2  ">
//         {children}
//         <input className="w-full   text-[0.9rem] bg-transparent outline-none" placeholder={placeholder} type="text" required/>
//       </div>
//     </div>
//   );
// }

export default Contact;
