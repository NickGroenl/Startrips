import React,{Component} from 'react';

import SelectCit from '../cites/cites';

import Slider from './slider';
import './home.css';
import VideoHeader from '../../video.mp4';


const lenguajes =  
  [
    {

        videoTitle: 'Vos elegis el destino',

        section1: 'Ventajas',
        subtitle1: 'Selección',
        description1: 'Tenemos dos opciones para ti: tu nos dices donde ir o tenemos un amplio catalogo de lugares fascinantes para tus vacaciones en Republica Dominicana',
        subtitle2: 'No te preocupes',
        description2: 'Nos encargaremos de gestionar todo tu servicio de inicio a fin, para que de lo unico que te tengas que preocupar es que estas disfrutando lo suficiente.',
        subtitle3: 'Precios',
        description3: 'Entre tantos precios y servicios que hay en el mercado, nosotros tenemos los mas accesibles y al alcance de cualquier persona.',
        
        section2: 'Algunos destinos'
    },
    {
        videoTitle: 'You choose the destination',

        section1: 'Advantage',
        subtitle1: 'Selection',
        description1: 'We have two options for you: you tell us where to go or we have a wide catalog of fascinating places for your vacation in the Dominican Republic.',
        subtitle2: 'Do not worry',
        description2: 'We will take care of managing all your service from start to finish, so that the only thing you have to worry about is that you are enjoying it enough.',
        subtitle3: 'Prices',
        description3: 'Among so many prices and services that are in the market, we have the most accessible and available to anyone.',
        
        section2: 'Some destinations'
    },
    {
        videoTitle: 'Вы выбираете направление',

        section1: 'Преимущество',
        subtitle1: 'Выбор',
        description1: 'У нас есть два варианта: вы говорите нам, куда поехать, или у нас есть широкий каталог интересных мест для отдыха в Доминиканской Республике.',
        subtitle2: 'Не волнуйся',
        description2: 'Мы позаботимся об управлении всеми вашими услугами от начала до конца, поэтому единственное, о чем вам нужно беспокоиться, - это то, что вы достаточно наслаждаетесь им.',
        subtitle3: 'Цены',
        description3: 'Среди множества цен и услуг, представленных на рынке, у нас самые доступные и доступные каждому.',
        
        section2: 'Некоторые направления'
    }
  ]

class CategoryVideo extends Component{
    
    render(){
        return(
            <header className="header-video">
                <video autoPlay muted loop>
                    <source src={VideoHeader} type="video/mp4" />
                </video>
                <div className="overlay">
                    <h1>{lenguajes[this.props.lenguaje].videoTitle}</h1>
                    <SelectCit lenguaje={this.props.lenguaje}/>
                    
                </div>
            </header>
        )
    }
}
export default class Home extends Component{
    render(){
        return(
            <div className="app-all-conntainer">
                <CategoryVideo lenguaje={this.props.lenguaje}/>
                <div className="app-container align-center">
                    <h1 className="h1-text2">{lenguajes[this.props.lenguaje].section1}</h1>
                    <div className="display-flex">
                        <div className="card-icon w-100-responsive">
                            <img src="https://www.freeiconspng.com/uploads/travel-icon--be-found-online-9.png" alt="icon"></img>
                            <h1>{lenguajes[this.props.lenguaje].subtitle1}</h1>
                            <p>{lenguajes[this.props.lenguaje].description1}</p>
                        </div>
                        <div className="card-icon w-100-responsive">
                            <img src="https://i.pinimg.com/originals/6b/15/97/6b1597f367e03eb9d9b8b665c0bac0d9.png" alt="icon"></img>
                            <h1>{lenguajes[this.props.lenguaje].subtitle2}</h1>
                            <p>{lenguajes[this.props.lenguaje].description2}</p>
                        </div>
                        <div className="card-icon w-100-responsive">
                            <img src="https://getmarriageregistered.in/img/icon31.png" alt="icon"></img>
                            <h1>{lenguajes[this.props.lenguaje].subtitle3}</h1>
                            <p>{lenguajes[this.props.lenguaje].description3}</p>
                        </div>
                    </div>
                
                </div>
                <div className="align-center w-100">
                    <h1 className="h1-text2">{lenguajes[this.props.lenguaje].section2}</h1>
                </div>
                <Slider lenguaje={this.props.lenguaje}/>
                <div className="w-100 align-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5344.985661697885!2d-68.44323140710286!3d18.687513362305186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8ebe34e01ff69%3A0x33d8a2e93823d68e!2sStar%20Trips%20punta%20cana!5e0!3m2!1ses!2sar!4v1624468126365!5m2!1ses!2sar" width="100%" height="500"  allowfullscreen="" loading="lazy"></iframe>

                </div>
                

                
            </div>
        )
    }
}