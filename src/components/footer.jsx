import { FaGithub, FaLinkedin, FaTiktok, FaSmile, FaEnvelope } from "react-icons/fa";


function Footer() {
  return (
    <div className="bg-cyan-500 p-5">
      <div className="flex flex-col sm:items-center justify-center text-3xl text-slate-100 mb-3">
        <p>I'm Edwin Kofi Nyarkoh,</p>
        <p>A Front-End-Developer, </p>
        <p>Student of Universty of Cape coast.</p>
      </div>
      <hr />
      <div className=" flex sm:justify-between items-start flex-col sm:flex-row sm:items-center text-slate-100 mt-3 mb-2">
        <div className="mb-3">
          <p className="text-3xl">Mr.Soft</p>
          <p>&copy; Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div>
            <nav>
                <ul className="flex gap-4 text-2xl text-white">
                    <a href="https://github.com/Edwin-Kofi-Nyarkoh" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.tiktok.com/@edwin.kofi.nyarkoh?_t=8oAb3FJAKxi&_r=1" target="_blank" rel="moopener noreferrer"><FaTiktok /></a>
                    <a href="https://linkedin.com/Edwin Nyarkoh" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </ul>
            </nav>
        </div>
      </div>
      <hr />
      <div>
        <p>Disclaimer: The roles listed on this website are based on real positions and all the images and photographs 
            dipicts the actual individual (Edwin) holding these positions. <br />I have taken measures to protect the privacy of
            and identity of me on this website.<FaSmile className="text-slate-300 mb-4"/> 
            <p className="flex items-center gap-3"><FaEnvelope className="text-slate-300 text-2xl"/> <a href={"mailto:edwin.kofi.nyarkoh.com"}>edwin.kofi.nyarkoh@gmail.com</a> </p>
            
        </p>
      </div>
    </div>
  );
}

export default Footer;
