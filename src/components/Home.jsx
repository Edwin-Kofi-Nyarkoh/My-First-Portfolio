import React from "react";
// import home from "../Assets/home.jpg";
import mainImg from "../Assets/mainImg.jpg"
import { motion } from "framer-motion"


function Home(props){
return(
    <div className="w-full flex flex-col sm:flex-row items-center justify-between p-4">
    {props.Data.map((Data, index) => {
    return(
        <div key={index} className="w-full flex flex-col items-start justify-start text-white sm:w-1/2 p-4">

        <motion.p 
        initial={{x: -100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1, delay:0.5}}        
        className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3">{Data.HeroText}</motion.p>

        <motion.p 
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, delay:1}}  

        className="text-xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl">{Data.TextBelow}</motion.p>
    </div>
    )}
    )}
    <div className="w-full flex items-center justify-center sm:w-1/2 ">
      <motion.img
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1, delay:1.5}}  
      
      src={mainImg} alt="Edwin Kofi Nyarkoh" className="w-4/5 sm:rounded-[50px] rounded-2xl sm:p-[40px]" />
    </div>
  </div>
)
}

export default Home;