import React,{Component} from 'react';

import SelectCit from '../cites/cites';

import './tours.css';


const lenguajes =  
[
    {
        title: 'Nuestros recorridos',
        description1: 'Playa Bávaro no solo es conocida por su belleza natural, la cual simula un paraíso terrenal, sino también por la gran cantidad de inversión de dinero que se ha hecho en torno a ella, para convertirla en un lugar donde hay atracciones para grandes y pequeños.',
        description2: 'Conocida como la capital del este de República Dominicana, la Romana es una pequeña urbe situada a sólo 45 minutos en coche de Punta Cana, con no más de 140.000 habitantes.',
        description3: ' El viajero se sentirá irremediablemente atraído por la playa del pueblo y la playa Dominicus, maravillosas extensiones de arena en el más puro estilo tropical. De estas playas, y también del puerto, parten las embarcaciones que llevan a los turistas a las islas Saona y Catalina.',
        description4: 'Uno de los lugares de vacaciones más bellos y deseables del mundo se encuentra a solo diez minutos en automóvil del aeropuerto de Punta Cana. Es el hogar de uno de los campos de golf más reconocidos, puertos deportivos espectaculares y está acreditado por revistas internacionales por su pesca.',
        description5: 'Miches posee un gran potencial turístico. La gran extensión de sus playas, de las mejores del país, con sus costas irregulares, que provocan accidentes geográficos en su litoral –puntas y ensenadas–, proporcionan todos los medios para un excelente turismo.',
        description6: 'Disfruta de los espléndidos paisajes de la República Dominicana desde distintas perspectivas con un tour desde Punta Cana a Samaná. Monta a caballo hasta la cascada del Limón, visita Cayo levantado, la isla Bacardí y una casa isleña y disfruta de un bufé.',

        saona: 'Isla Saona',
        horse: 'Caballo',
        activity: 'Actividades'
    },
    {
        title: 'Our Tours',
        description1: 'Playa Bávaro is not only known for its natural beauty, which simulates an earthly paradise, but also for the large amount of money investment that has been made around it, to make it a place where there are attractions for young and old.',
        description2: 'Known as the capital of the eastern Dominican Republic, La Romana is a small city located just 45 minutes by car from Punta Cana, with no more than 140,000 inhabitants.',
        description3: 'The traveler will be inevitably drawn to the towns beach and Dominicus beach, wonderful stretches of sand in the purest tropical style. The boats that take tourists to the Saona and Catalina islands depart from these beaches, and also from the port.',
        description4: 'One of the most beautiful and desirable vacation spots in the world is located just a ten minute drive from the Punta Cana airport. It is home to one of the most renowned golf courses, spectacular marinas and is accredited by international magazines for its',
        description5: 'Miches has great tourist potential. The great extension of its beaches, one of the best in the country, with its irregular coasts, which cause geographical accidents on its coastline - points and inlets - provide all the means for excellent tourism.',
        description6: 'Enjoy the splendid landscapes of the Dominican Republic from different perspectives with a tour from Punta Cana to Samaná. Ride a horse to the Limón waterfall, visit Cayo Levantado, Bacardi Island and an island house, and enjoy a buffet.',

        saona: 'Saona Island',
        horse: 'Horse',
        activity: 'Activities'
    },
    {
        title: 'Наши туры',
        description1: 'Плайя Баваро известен не только своей природной красотой, которая имитирует земной рай, но и огромными инвестициями, сделанными вокруг него, чтобы сделать его местом, где есть достопримечательности для молодых и старых.',
        description2: 'Ла-Романа, известная как столица восточной Доминиканской Республики, представляет собой небольшой город, расположенный всего в 45 минутах езды на машине от Пунта-Каны, с населением не более 140 000 человек.',
        description3: 'Путешественника неминуемо привлечет городской пляж и пляж Доминикус, чудесные песчаные полосы в чистейшем тропическом стиле. Лодки, которые доставляют туристов на острова Саона и Каталина, отправляются с этих пляжей, а также из порта.',
        description4: 'Одно из самых красивых и желанных мест для отдыха в мире находится всего в десяти минутах езды от аэропорта Пунта-Кана, здесь находится одно из самых известных полей для гольфа, впечатляющие пристани для яхт и аккредитовано международными журналами за рыбалку.',
        description5: 'Мишес имеет большой туристический потенциал. Обширные протяженные пляжи, одни из лучших в стране, с неровными берегами, которые вызывают географические катастрофы на его береговой линии - точки и заливы - предоставляют все возможности для отличного туризма.',
        description6: 'Наслаждайтесь великолепными пейзажами Доминиканской Республики с разных точек зрения во время тура из Пунта-Каны в Саману. Прокатитесь на лошади к водопаду Лимон, посетите Кайо-Левантадо, остров Бакарди и островной дом и насладитесь шведским столом.',

        saona: 'Остров Саона',
        horse: 'Лошадь',
        activity: 'Деятельность'
    }
]

export default class Tours extends Component{
    render(){
        return(
            <div className="app-all-conntainer align-center">

                <h1 className="h1-text">{lenguajes[this.props.lenguaje].title}</h1>
                <div className="app-container">
                    <SelectCit lenguaje={this.props.lenguaje}/>
                    <ul id="cardtours">
                        <li class="cardtours" id="card_1">
                            <div class="card__content">
                                <div>
                                    <h2>Bavaro</h2>
                                    <p>
                                    {lenguajes[this.props.lenguaje].description1}
                                    </p>
                                    <p><a href="#top" class="btn btn--accent">$30 (Suburban) $40</a></p>
                                </div>
                                <figure>
                                    <img src="https://static.barcelo.com/content/dam/bhg/master/es/hoteles/dominican-republic/punta-cana-bavaro/barcelo-bavaro-beach/main-photos/hotel/BBAVB_BEA_21.jpg" alt="Image description"/>
                                </figure>
                            </div>
                        </li>
                        <li class="cardtours" id="card_2">
                            <div class="card__content">
                                <div>
                                    <h2>Romana</h2>
                                    <p>
                                    {lenguajes[this.props.lenguaje].description2}
                                    </p>
                                    <p><a href="#top" class="btn btn--accent">$95 - 160 (SUB)</a></p>
                                </div>
                                <figure>
                                    <img src="https://buenavibra.es/wp-content/uploads/2018/04/la-romana_opt.jpg" alt="Image description"/>
                                </figure>
                            </div>
                        </li>
                        <li class="cardtours" id="card_3">
                            <div class="card__content">
                                <div>
                                    <h2>Bayahibe</h2>
                                    <p>
                                    {lenguajes[this.props.lenguaje].description3}
                                       </p>
                                    <p><a href="#top" class="btn btn--accent">$80 (Suburban) $120</a></p>
                                </div>
                                <figure>
                                    <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/50000/50146-Bayahibe.jpg" alt="Image description"/>
                                </figure>
                            </div>
                        </li>
                        <li class="cardtours" id="card_4">
                            <div class="card__content">
                                <div>
                                    <h2>Cap Cana</h2>
                                    <p>
                                    {lenguajes[this.props.lenguaje].description4}
                                    </p>
                                    <p><a href="#top" class="btn btn--accent">$25 (Suburban) $35</a></p>
                                </div>
                                <figure>
                                    <img src="https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/3a5402fa-ff84-53a7-7729-cc2d37f30229/630x355.jpg" alt="Image description"/>
                                </figure>
                            </div>
                        </li>
                        <li class="cardtours" id="card_4">
                            <div class="card__content">
                                <div>
                                    <h2>Miche</h2>
                                    <p>
                                    {lenguajes[this.props.lenguaje].description5}
                                    </p>
                                    <p><a href="#top" class="btn btn--accent">$140 (Suburban) $190</a></p>
                                </div>
                                <figure>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Playa_esmeralda_miches.png/300px-Playa_esmeralda_miches.png" alt="Image description"/>
                                </figure>
                            </div>
                        </li>
                        <li class="cardtours" id="card_4">
                            <div class="card__content">
                                <div>
                                    <h2>Samana</h2>
                                    <p>
                                    {lenguajes[this.props.lenguaje].description6}
                                    </p>
                                    <p><a href="#top" class="btn btn--accent">$350 (Suburban) $390</a></p>
                                </div>
                                <figure>
                                    <img src="https://cdn2.civitatis.com/republica-dominicana/punta-cana/galeria/cayo-levantado-isla-bacardi.jpg" alt="Image description"/>
                                </figure>
                            </div>
                        </li>
                        <li class="cardtours" id="card_5">
                            <div class="card__content">
                                <div>
                                    <h2>Santo Domingo</h2>
                                    <p>
                                        <span>SDO - Bavaro $170 (suburban) $200</span><br/>
                                        <span>SDO - Cap Cana $160 (suburban) $190</span><br/>
                                        <span>SDO - Uvero Alto $190 (suburban) $220</span><br/>
                                        <span>SDO - Romana $140 (suburban) $170</span><br/>
                                        <span>SDO - Bayahibe $150 (suburban) $180</span><br/>
                                        <span>SDO - Miche $220 (suburban) $270</span><br/>
                                        <span>SDO - Samaná $290 (suburban) $280</span><br/>
                                    </p>
                                </div>
                                <figure>
                                    <img src="https://travelexperience.com.do/wp-content/uploads/2019/12/cataloniasantodomingo_view_3.jpg" alt="Image description"/>
                                </figure>
                            </div>
                        </li>
                        <li class="cardtours" id="card_5">
                            <div class="card__content">
                                <div>
                                    <h2>{lenguajes[this.props.lenguaje].activity}</h2>
                                    <p>
                                        <span>{lenguajes[this.props.lenguaje].saona} - $65</span><br/>
                                        <span>Buggy - $50</span><br/>
                                        <span>Zip Limes - $50</span><br/>
                                        <span>City Tour - $45</span><br/>
                                        <span>{lenguajes[this.props.lenguaje].horse} - $35</span><br/>
                                        <span>Tour Santo Domingo - $70</span><br/>
                                        <span>Party Boat - $40</span><br/>
                                    </p>
                                </div>
                                <figure>
                                    <img src="https://mypuntacanaholidays.com/wp-content/uploads/2020/11/Excursiones-en-embarcaciones.jpg" alt="Image description"/>
                                </figure>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                

                
            </div>
        )
    }
}

