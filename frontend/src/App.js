import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About";
import Rules from "./Pages/Rules/Rules";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function App() {
    return (
        <>
            <NavbarComponent/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/despre" element={<About/>}/>
                    <Route path="/regulament" element={<Rules/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}