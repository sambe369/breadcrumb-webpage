import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Header} from "./components/Header";
import { Footer } from "./components/home/footer";
import Home from "./components/Home";
import Services from "./components/services/Services";
import Contact from "./components/contact/contact";
import About from "./components/about us/About";
import Blog from "./components/blog/Blog";
import Career from "./components/career/Career";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home_style/home.scss";
import "./styles/home_style/cards.scss";
import "./styles/home_style/operation.scss";
import "./styles/footer.scss";
import "./styles/home_style/testimonial.scss";
import "./styles/home_style/services.scss";
import "./styles/home_style/home_section_1.scss";
import "./styles/home_style/home_section_2.scss";
import "./styles/home_style/home_section_3.scss";
import "./styles/home_style/slider.scss";


export const App =() => {
  return(
    <Router>
      <Header /> 
      <Routes>
      
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/career" element={<Career />}/>
      
      </Routes>
      <Footer />
    </Router>
  );
  
}


