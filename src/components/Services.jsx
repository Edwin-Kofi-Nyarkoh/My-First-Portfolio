import React from "react";

function Services(props) {
  return (
    <>
        <div className="flex justify-center items-center text-4xl mt-6 text-white static top-20">
        <p className=" pb-2 border-b-cyan-400 border-b-2 ">Services</p></div>
      <div className="grid sm:grid-cols-3 sm:m-4 p-4 ">
        {props.data1.map((Data1, index) => (
          <div key={index} className="bg-white shadow-2xl m-6 p-6 rounded-md">
            <p><img src={Data1.theImg} alt="" className="h-[150px] rounded-md mb-3 w-1/2"/></p>
            <p className="font-bold text-cyan-400">{Data1.theSkill}</p>
            <p>{Data1.description}</p>
            <button className="bg-cyan-400 p-2 rounded-lg mt-2">{Data1.butt}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
