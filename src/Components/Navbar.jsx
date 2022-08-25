import React, {useState} from 'react';
import logo from '../images/logo2.png';
import {Link, link} from 'react-scroll';

function Navbar(){

const [nav, setnav] = useState(false);

const changeBackground = () =>{
    if (window.scrollY >= 50) {
        setnav(true);
    }
    else {
        setnav(false);
    }
}
window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='#' className='logo'>
            <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='#'>Inicio</Link></li>
                <li><Link to='#'>Nosotros</Link></li>
                <li><Link to='#'>Productos</Link></li>
                <li><Link to='#'>Contacto</Link></li>
                
            </ul>
</nav>
    )
}

export default Navbar;