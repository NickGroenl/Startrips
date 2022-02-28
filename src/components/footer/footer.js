import './footer.css';
import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const lenguajes =  
  [
    {
        title: 'Star Trips',
        description: 'Star Trips Punta Cana es una empresa dedicada al alquiler de vehiculos con y sin chofer',

        redirect: 'Redirecciones',
        redirect_1: 'Inicio',
        redirect_2: 'Flota',
        redirect_3: 'Tours',

        operate: '¿Donde operamos?',
        operate_1: 'Republica Dominicana',
        operate_2: 'Argentina',

        contact: 'Contacto',
    },
    {
        title: 'Star Trips',
        description: 'Star Trips Punta Cana is a company dedicated to renting vehicles with and without a driver',

        redirect: 'Redirects',
        redirect_1: 'Home',
        redirect_2: 'Fleet',
        redirect_3: 'Tours',

        operate: '¿Where do we operate?',
        operate_1: 'Dominican Republic',
        operate_2: 'Argentina',

        contact: 'Contact',
    },
    {
        title: 'Star Trips',
        description: 'Star Trips Punta Cana - компания, специализирующаяся на аренде автомобилей с водителем и без него.',

        redirect: 'Перенаправления',
        redirect_1: 'Начинать',
        redirect_2: 'Флот',
        redirect_3: 'Туры',

        operate: 'Где мы работаем?',
        operate_1: 'Доминиканская Республика',
        operate_2: 'Аргентина',

        contact: 'Контакт',
    }
]
export default class Footer extends Component{
    toSocial = (url) =>{
        window.location.href = url
    }
    render() { 
        return(
            <div class="footer">
                <div class="inner-footer">
                    <div class="footer-items">
                    <h1>{lenguajes[this.props.lenguaje].title}</h1>
                    <p>{lenguajes[this.props.lenguaje].description}</p>
                    </div>

                    <div class="footer-items">
                    <h3>{lenguajes[this.props.lenguaje].redirect}</h3>
                    <div class="border1"></div>
                        <ul>
                        <a href="/home"><li>{lenguajes[this.props.lenguaje].redirect_1}</li></a>
                        <a href="/fleet"><li>{lenguajes[this.props.lenguaje].redirect_2}</li></a>
                        <a href="/tours"><li>{lenguajes[this.props.lenguaje].redirect_3}</li></a>
                        </ul>
                    </div>

                    <div class="footer-items">
                    <h3>{lenguajes[this.props.lenguaje].operate}</h3>
                    <div class="border1"></div>
                        <ul>
                        <a href="#"><li>{lenguajes[this.props.lenguaje].operate_1}</li></a>
                        <a href="#"><li>{lenguajes[this.props.lenguaje].operate_2}</li></a>
                        
                        </ul>
                    </div>

                    <div class="footer-items">
                    <h3>{lenguajes[this.props.lenguaje].contact}</h3>
                    <div class="border1"></div>
                        <ul>
                        <li><i class="fa fa-phone" aria-hidden="true"></i>+1 (849) 356-4681</li>
                        <li><i class="fa fa-envelope" aria-hidden="true"></i> startripspuntacana2021@gmail.com</li>
                        </ul> 
                    
                        <div className="align-center">
                            <div className="icon-media inline-item" onClick={() => this.toSocial('https://instagram.com/startripspuntacana')}>
                                <img src="https://i.pinimg.com/originals/3b/21/c7/3b21c7efd2ba9c119fb8d361acacc31d.png" alt="instagram"/>
                            </div>
                            <div className="icon-media inline-item" onClick={() => this.toSocial('https://www.facebook.com/startrips.puntacana')}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="instagram"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
}