import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Data from "./components/data";
import Data1 from "./components/dataforservices";
import Data2 from "./components/dataforabout";
import ScrollToTop from "./components/ScrollToTop";
// import MultiAnimatedComponent from "./components/trials";
import About from "./components/About";
import {Routes, Route} from "react-router-dom"



export default function App() {
  return (
    <>
   <div className="bg-gradient-to-b from-gray-400 to-black">
      <NavBar />
      <ScrollToTop />
      <div className="sm:p-6">
        <Routes>
          <Route path="/" element={<Home Data={Data} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About data2={Data2} />} />
          <Route path="/Services" element={<Services data1={Data1} />} />
        </Routes>
      </div>
      <Footer />
    </div>
      </>
  )
}