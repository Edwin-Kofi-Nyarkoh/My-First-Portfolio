import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-10 ">
        <div className="flex justify-between items-center w-full shadow-md bg-gray-400 h-20 px-4 text-white">
          <div>
            <p className="text-4xl sm:text-5xl">
              <i>Edwin</i>
            </p>
          </div>
          <div className="hidden sm:block">
            <ul className="flex justify-center items-center gap-6 text-2xl">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/Services">Services</NavLink></li>
              <li><NavLink to="/About">About</NavLink></li>
              <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
          </div>
          <div
           onClick={() => SetIsOpen(!isOpen)}
            className="cursor-pointer sm:hidden text-2xl z-10"
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden">
            <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-gray-500 to bg-black text-2xl">
              <li onClick={() => SetIsOpen(!isOpen)} className="mb-2">
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li onClick={() => SetIsOpen(!isOpen)} className="mb-2">
                <NavLink to="/Services">Services
                </NavLink>
              </li>
              <li onClick={() => SetIsOpen(!isOpen)} className="mb-2">
                <NavLink to="/About">
                  About
                </NavLink>
              </li>
              <li onClick={() => SetIsOpen(!isOpen)} className="mb-2">
                <NavLink to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
export default Navbar;

