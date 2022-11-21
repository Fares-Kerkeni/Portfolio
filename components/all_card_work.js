import React from 'react';
import Card_work from './card_work';
import { project } from '../pages/api/projet'
const all_card_work = () => {
   
    return (

        <div className='all_card_work'>
            <div className='title_work'>
                Mes Projets
            </div>
            <div className='container_card'>
                <Card_work name='Netflix' date='2022' image="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/Netflix-Logo.jpg"  src='https://github.com/Fares-Kerkeni/Netflix_repli'/>
                <Card_work name='All_contries'date='2022' image="https://c8.alamy.com/compfr/2b1fw7t/drapeaux-nationaux-etiquettes-en-tissu-etiquettes-de-pays-du-g-20-jeu-de-vecteurs-de-balises-de-pays-officiels-2b1fw7t.jpg" src='https://github.com/Fares-Kerkeni/all_Countries.git' />
            </div>
                    

            
        </div>
    );
};

export default all_card_work;