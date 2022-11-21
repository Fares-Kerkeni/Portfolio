import React from 'react';
import Link from 'next/link'
import fleche from "../assets/fleche.png";
import Image from 'next/image';
import Button from './button';
const contener_home = () => {
    return (
        <div className='contener_home'>
            <div  className='short_presentation'>
                <p>Salut, c'est Fares. </p>
                <p>Je suis un développeur web Front-End qui recherche constamment des solutions innovantes aux problèmes quotidiens.</p>
                <p>Pour une raison quelconque, vous êtes ici, bienvenue.</p>
                
                <Button page='/about' name_page="About"/>

                


            </div>
            
            
        </div>
    );
};

export default contener_home;