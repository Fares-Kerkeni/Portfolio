import React from 'react';
import open from "../assets/open.png"
import Modal from './Modal';
import Image from 'next/image';
import {useState} from 'react';
import logo from "../assets/logo.png"
import Link from 'next/link'
const navBar = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () =>{
        setModal(!modal)
    }
    const linkHome = () =>{
        <Link href="/">Home</Link>
    }
   console.log(modal)
    return (
        <div>
            {modal &&
                <Modal boul_true={modal}/>
            }
            
            <div className='navBar'>
            <div>
            <Image
                  onClick={linkHome}
                  className='logo'
                  src={logo}
                  width={20}
                  height={20}
            />

            </div>
            <h1></h1>
            <div className='logo_open'>
                <Image
                    onClick={toggleModal}
                    className='open'
                    src={open}
                    width={30}
                    height={30}
                />
            </div>
            
            
        </div>
        </div>
        
    );
};

export default navBar;