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
    const emailUrl = `mailto:Eddiek7144@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
    setTimeout(() => {
      window.location.reload();
    }, 9000);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center text-4xl mt-6 text-white static top-20">
          <p className=" pb-2 border-b-cyan-400 border-b-2 ">Contact Me</p>
        </div>

        <div className="grid sm:grid-cols-2 mt-10">

          <div className="bg-gradient-to-r from-gray-500 to-cyan-400 sm:mx-10 p-3 mx-3 sm:my-6 mb-4 rounded-md flex justify-center items-center">
            <div className=" sm:text-2xl text-white">
              <p className="mb-5">Contact Me</p>
              <p className="mb-5">If you have Project on your mind</p>
              <p className="mb-5">I'm RESTFUL Developer.</p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-slate-300 text-2xl" />
                <a href={"mailto:edwin.kofi.nyarkoh@gmail"}>
                  edwin.kofi.nyarkoh@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white sm:mx-10 p-3 mx-5 sm:my-7 mb-4 rounded-md shadow-md">
            <form onSubmit={handleSubmit}>
              <label htmlFor="body" className="text-cyan-500 text-2xl pb-7">
                Subject
              </label>
              <input
                className="bg-transparent border-2 mb-10 w-full sm:px-40 py-5 rounded text-cyan-500"
                type="text"
                value={subject}
                onChange={handleSubjectChange}
                placeholder="Subject..."
              />
              <br />
              <label htmlFor="body" className="text-cyan-500 text-2xl pb-7">
                Type Your Message Here
              </label>
              <input
                className="bg-transparent border-2 mb-3 w-full sm:px-40 py-20  text-cyan-500"
                type="text"
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Type your message..."
              />
              <br />
              <button type="submit" className="bg-cyan-400 px-4 py-2 rounded">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
