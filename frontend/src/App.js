import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About";
import Edition from "./Pages/Edition/Edition";
import Rules from "./Pages/Administrativ/Rules/Rules";
import Contact from "./Pages/Contact/Contact";
import Register from "./Pages/Register/Register";
import Terms from "./Pages/Administrativ/Terms/Terms";
import Politics from "./Pages/Administrativ/Politics/Politics";
import Footer from "./Components/Footer/Footer";
import Error404 from "./Pages/Error404/Error404";

export default function App() {
    return (
        <>
            <Router>
                <NavbarComponent/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/despre" element={<About/>}/>
                    <Route path="/editii" element={<Edition/>}/>
                    <Route path="/regulament" element={<Rules/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/inscrie-te" element={<Register/>}/>
                    <Route path="/termenisiconditii" element={<Terms/>}/>
                    <Route path="/politicaconfidentialitate" element={<Politics/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}