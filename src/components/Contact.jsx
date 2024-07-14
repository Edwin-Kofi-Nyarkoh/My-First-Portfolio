import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailUrl = `mailto:Eddiek7144@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
    setTimeout(() => {
      window.location.reload();
    }, 9000);
  };

  return (
    <>
    <div className="flex justify-center items-center text-4xl mt-6 text-white static top-20">
      <p className=" pb-2 border-b-cyan-400 border-b-2 ">Contact Me</p></div>
    <div className="w-full h-screen flex flex-col sm:flex-row items-center justify-around mr-1 p-4">
      <div className="sm:w-1/2 flex items-center sm:items-start sm:text-3xl sm:justify-start text-2xl justify-center">
        <div>
        <p className="mb-5">Contact Me</p> 
        <p className="mb-5">If you have Project on your mind</p> 
        <p className="mb-5">I'm RESTFUL Developer.</p>
        <p className="flex items-center gap-3"><FaEnvelope className="text-slate-300 text-2xl"/> 
        <a href={"mailto:edwin.kofi.nyarkoh@gmail"}>edwin.kofi.nyarkoh@gmail.com</a> </p>
        </div>
      </div>
      <div className="sm:w-1/2 w-full flex flex-col bgblue-600 sm:items-center shadow-lg justify-center">
        <form onSubmit={handleSubmit}>
        <label htmlFor="body" className="text-white text-2xl pb-7">Subject</label>
          <input
            className="bg-transparent border-2 mb-10 w-full sm:px-40 px-[50px] py-5 rounded text-cyan-300"
            type="text"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Subject..."
          />
          <br />
          <label htmlFor="body" className="text-white text-2xl pb-7">Type Your Message Here</label>
          <input
            className="bg-transparent border-2 mb-3 w-full sm:px-40 px-[100px] py-20 rounded text-cyan-300"
            type="text"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Type your message..."
          />
          <br />
          <button type="submit" className="bg-cyan-500 px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
