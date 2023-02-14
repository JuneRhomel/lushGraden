import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"
import "../style/nav.css"

export default function Nav() {



    const navMenu = ()=> {
        document.querySelector(".navigation ul").classList.toggle("active-nav")
    }



    return (
        <header>
            <div className='container'>
                <div className='navigation'>
            <div>
                <img className='logo' src={logo} alt="" />
            </div>
            <nav>
                <button onClick={navMenu} className='menu-btn'><i class="fa-solid fa-bars"></i></button>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/">Planters</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <button>Call Us</button>
                </ul>
            </nav>
            </div>
            </div>
        </header>
    )
}
