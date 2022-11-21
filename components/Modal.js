import React from 'react';
import {useState} from 'react';
import Link from 'next/link'
import close from "../assets/close.png"
import Image from 'next/image';
const Modal = (boul_true) => {
    const [modal, setModal] = useState(boul_true);
    const toggleModal = () =>{
        setModal(!modal)
    }
    return (
        <div>
           
            {modal && (
            <div className='modal'>
                
                
                <div className='nav_modal'>
                    <div></div>
                    <Image
                        onClick={toggleModal}
                        className='close'
                        src={close}
                        width={60}
                        height={60}
                    
                    />
                    <div></div>
                </div>
                <div className='words_modal'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/work">Works</Link>
                </div>
               
            </div>
            )
}
        </div>
        
            
            
        
    );
};

export default Modal;