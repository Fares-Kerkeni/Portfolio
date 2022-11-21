import React from 'react';
import All_card_work from './all_card_work';
import Button from './button';
import Footer from '../components/footer';
const container_works = () => {
    return (
        <div className='container_works'>
            
            <All_card_work/>
            <div className='button_more'>
               <Button page='/work' name_page="Voir Plus"/> 
            </div>
            <div className='footer_index'>
                <Footer/>
            </div>
        </div>
    );
};

export default container_works;