import React from "react";
import v5_13 from "../assets/IMG/v5_13.png"
class Header extends React.Component{
    render(){
        return(

            <header className="header">
                <nav className="navbar container">
               <a href="/"><img src={v5_13}alt="Logo" className="logo" /></a> 
                <ul className="nav-menu">
                <li className="nav-menu--item">
                 <a href="/Premium">Servicios</a>
                </li>
                <li className="nav-menu--item">
                 <a href="/Integrantes">¿Quienes somos?</a>
                </li>
                <li className="nav-menu--item">
                 <a href="/FAQ">FAQ</a>
                </li>
                </ul>
                </nav>
            </header>



        );

    }



}
export default Header;