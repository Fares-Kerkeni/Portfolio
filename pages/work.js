import React from 'react';
import All_card_work from '../components/all_card_work';
import Nav from '../components/navBar';
import Footer from '../components/footer';
const work = () => {
    return (
        <div className='work'>
            <div className='nav'>
               <Nav/> 
            </div>
            <All_card_work/>
            <Footer/>

           
           
          
        </div>
    );
};

export default work;