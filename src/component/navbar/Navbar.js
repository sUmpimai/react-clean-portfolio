import { useState, useEffect } from 'react';
import Input from '../input/Input';
import './Navbar.scss';

const Navbar = ({position}) => {
    
    const [clsName, setClsName] = useState("navbar");
    
    useEffect(() => {
    window.addEventListener("scroll", () => {

        if (window.scrollY > window.innerHeight && position === "fixed") {
            setClsName("navbar sticky-top bg-white borer-bottom shadow-sm animated fadeInDown");
        } else {
            setClsName("navbar");
        }
   
    });
    }, [position]); 
    
    return (
        <header className={clsName}>
        <nav className='container'>
            <a href="home" className='navbar-logo font-dynapuff'>Su<span className='dot'>.</span></a>
            <div className="navbar-items-container">  
                <Input className={"form-input"} type={"checkbox"}/>  
                <button className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </button> 
                <div className="navbar-items"> 
                    <ul className="container">
                        <li className='nav-item'><a href="home">Work</a></li>
                        <li className='nav-item'><a href="about">About</a></li>
                        <li className='nav-item'><a href="contact">contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;