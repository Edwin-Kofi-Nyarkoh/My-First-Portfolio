import React from "react";
import AboutImg from "../Assets/AboutImg.jpg";

function About(props) {
  return (
    <div className="mb-2">
      <div className="flex justify-center items-center text-4xl mt-4 p-4 text-white static top-20">
        <p className=" pb-2 border-b-cyan-400 border-b-2 ">About Me</p>
      </div>

      <div className="flex sm:justify-center flex-col sm:flex-row sm:px-6 w-full">
        <div className=" sm:w-2/5 bg-re-300">
          <img src={AboutImg} alt="" className="rounded-3xl p-10" />
        </div>

        <div className="sm:w-3/5 bg-slat-500 sm:ml-4 mt-9 sm:mt-0 flex flex-col ">
          {props.data2.map((Data2, Data2index) => (
            <>
            <div key={Data2index} className="mt- p-10 flex-grow">
              <p className="text-3xl flex justify-center text-white mb-3">
                {Data2.heading}
              </p>
              <p className="text-[20px]">{Data2.textBelow}</p>
                </div>
              <div className="self-start sm:self-center ml-10 sm:mb-40 sm:gap-8 gap-4 flex">
                <img
                  src={Data2.theITailwindSVG}
                  className="text3xl size-11 sm:size-20"
                  alt=""
                />
                <p className=" sm:text-8xl text-5xl text-react-blue">{Data2.theReactIcon}</p>
                <p className=" sm:text-8xl text-5xl text-js-yellow">{Data2.theJsIcon}</p>
              </div>
              </>
          ))}
          ;
        </div>
      </div>
    </div>
  );
}

export default About;
