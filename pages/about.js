import React from 'react';
import Nav from '../components/navBar'
import Footer from '../components/footer';
import Link from 'next/link'
const about = () => {
   
    return (
        <div className='about'>
            <Nav/>
            <div className='header_about'>
                <p>FARES</p>
                <p>KERKENI</p>
                <Link href="/cv.pdf" target="_blank">Mon Cv</Link>
                
            </div>
            <div className='container_about'>
                <div className='container_left'>
                    
                    <div className='container_lang'>
                        <ul>
                            <dt>Front-End</dt>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>Vue.js</li>
                            <li>React.js</li>
                        </ul>
                        <ul>
                            <dt>Outils</dt>
                            <li>Figma</li>
                            <li>Photoshop</li>
                            <li>GitHub</li>
                            <li>PhpMyAdmin</li>
                            <li>Visual Studio</li>
                            <li>Code</li>
                        </ul>
                    </div>
                    <div className='container_lang'>
                        <ul>
                            <dt>Back-End</dt>
                            <li>Python</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            
                        </ul>
                    </div>

                    
                </div>
                <div className='container_right'>
                    <div className='about_me'>
                        <p>À Propos De Moi</p>
                    </div>
                    <div className='all_text'>
                        <p>
                            Achevant actuellement ma première année de Bachelor Web à Hetic, dans le cadre
                            de mon parcours, je dois trouver une alternance afin de pouvoir poursuivre mon
                            cursus.
                        </p>
                        <p>
                            J'ai pu, à l'occasion de cette année de formation, me confronter à différents
                            domaines du développement web via différents projets de cours tel que la refonte du
                            design d’une page web sur figma, la création d’un Paint en Javascript, la création
                            d'un reseaux sociale en php.
                        </p>
                        <p>
                            Mais aussi des projets personnels tel que la copie de Netflix en react et SCSS pour
                            le front et Node, MongoDB avec API pour le back, puis aussi un autre projet de
                            Correcteur Orthographe avec du vuejs pour le front avec API avec la Gestion du text
                            rentré par l’utilisateur.
                        </p>
                    </div>


                </div>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    );
};

export default about;
                        





                         
