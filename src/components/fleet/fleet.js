import React,{Component} from 'react';
import './fleet.css';

const lenguajes =  
[
    {
        title: 'Nuestra flota',
        title1: 'Toyota Hiace Blanca',
        description1: 'Maximo 6 personas, techo bajo, modelo 2016',
        description2: 'Maximo 8 personas, techo alto, modelo 2016',
        title3: 'Cheverolet Suburban negra',
        description3: 'Maximo 7 personas, modelo 2015',
        description4: 'Maximo 2 personas, modelo 2015'
    },
    {
        title: 'Our Fleet',
        title1: 'Toyota Hiace White',
        description1: 'Maximum 6 people, low roof, 2016 model',
        description2: 'Maximum 8 people, high roof, 2016 model',
        title3: 'Cheverolet Suburban Black',
        description3: 'Maximum 7 people, model 2015',
        description4: 'Maximum 2 people, model 2015'
    },
    {
        title: 'Наш флот',
        title1: 'Toyota hiace белый',
        description1: 'Максимум 6 человек, низкая крыша, модель 2016 г.',
        description2: 'Максимум 8 человек, высокая крыша, модель 2016 г.',
        title3: 'Черный Chevrolet Suburban',
        description3: 'Максимум 7 человек, модель 2015 г.',
        description4: 'Максимум 2 человека, модель 2015 г.'
    }
]

export default class Fleet extends Component{
    render(){
        return(
            <div className="app-all-conntainer align-center">

                <h1 className="h1-text">{lenguajes[this.props.lenguaje].title}</h1>

                <div className="app-container align-center">
                
                    <main class="page-content">
                        
                        <div class="cardfleet">
                            <div class="content">
                            <h2 class="title">{lenguajes[this.props.lenguaje].title1}</h2>
                            <p class="copy"> {lenguajes[this.props.lenguaje].description1}</p>
                            </div>
                        </div>
                        <div class="cardfleet">
                            <div class="content">
                            <h2 class="title">{lenguajes[this.props.lenguaje].title1}</h2>
                            <p class="copy">{lenguajes[this.props.lenguaje].description2}</p>
                            </div>
                        </div>
                        <div class="cardfleet">
                            <div class="content">
                            <h2 class="title">{lenguajes[this.props.lenguaje].title3}</h2>
                            <p class="copy">{lenguajes[this.props.lenguaje].description3}</p>
                            </div>
                        </div>
                        <div class="cardfleet">
                            <div class="content">
                            <h2 class="title">Buggy Polaris</h2>
                            <p class="copy">{lenguajes[this.props.lenguaje].description4}</p>
                            </div>
                        </div>
                    </main>
                </div>

                
            </div>
        )
    }
}