import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Redirect, Link
} from "react-router-dom";
import Logo from './logo.jpg';
import './navbar.css';


const lenguajes =  
  [
    {
        title: 'Flota',
        title2: 'Tours'
    },
    {
        title: 'Fleet',
        title2: 'Tours'
    },
    {
        title: 'Флот',
        title2: 'Туры'
    }
]

export default class Navbar extends Component{
    
    render(){
        return(
            <header class="header">
                <a href="/home" class="logo"><img src={Logo} alt="logostartrips" width="80px" height="40px"/></a>
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul class="menu">
                    <li><Link to="/fleet">{lenguajes[this.props.lenguaje].title}</Link></li>
                    <li><Link to="/tours">{lenguajes[this.props.lenguaje].title2}</Link></li>
                </ul>
            </header>
        )
    }
}