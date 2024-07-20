import React from "react";
import{ motion } from "framer-motion"





function Services(props) {
  const theReloadFunction=(event)=>{
    event.preventDefault();
  
    setTimeout(() => {
      window.location.reload();
    }, 9000);
  };
  return (
    <>
        <div className="flex justify-center items-center text-4xl mt-6 text-white static top-20">
        <motion.p
                   initial={{x: -5, opacity: 0}}
                   animate={{x: 0, opacity: 1}}
                   transition={{duration: 1, ease:"linear", delay: 0.5}}
        
        className=" pb-2 border-b-cyan-400 border-b-2 ">Services</motion.p>
        </div>

      <motion.div
  
      
      className="grid sm:grid-cols-3 sm:m-4 p-4 ">

        {props.data1.map((Data1, index) => (
          <motion.div key={index}
          initial={{opacity: 0.9, scale: 0.9}}
          whileHover={{opacity:1, scale: 1}}

          className="bg-white shadow-2xl m-6 p-6 rounded-md">
            <p><img src={Data1.theImg} alt="some imageHere" className="h-[150px] rounded-md mb-3 w-1/2"/></p>
            <p className="font-bold text-cyan-400">{Data1.theSkill}</p>
            <p className="mb-4">{Data1.description}</p>
            <form onSubmit={theReloadFunction}>
            <button type="submit"><a  href={"mailto:edwin.kofi.nyarkoh@gmail.com"} 
            className="bg-cyan-400 p-2 rounded-lg  hover:bg-cyan-600">{Data1.butt}</a> </button>
            </form>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Services;
