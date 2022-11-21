import React, { Component } from 'react';
import fleche_bas from "../assets/flech_bas.png"
import Image from 'next/image';
import NavBar from '../components/navBar';
import Contener_home from '../components/contener_home';
import Container_works from '../components/container_works';

class index extends Component {
  render() {
    return (
      <div className='index'>
        
        <NavBar/>
        <div className='container_header'>
          
          <div className='container_intitul'>
            <div className="my_name">
              <p>Fares Kerkeni</p>
            </div>
            <p>développeur</p>
            <p>web</p>
            <p>front</p>
            <div className='fleche_bas'>
              <Image
                className='images_bas'
                src={fleche_bas}
                width={60}
                height={60}
              />
            </div>
         </div>
        </div>
        <Contener_home/>
        <Container_works/>
        
        
       </div>
    );
  }
}

export default index;