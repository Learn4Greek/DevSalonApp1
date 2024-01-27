import React, { Children } from "react";
import ReactDOM  from "react-dom/client";
import Navbar from'./components/NavMenu/navBar';
import Indro from './components/Indro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Login from './components/Login/login';

//import "./index.css";

function Greeting() {
    return (
    <div>
        <Login/>
        <Navbar/>
        <Indro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
    </div>
    );
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Greeting></Greeting>);