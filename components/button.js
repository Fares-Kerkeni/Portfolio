import React from 'react';
import fleche from "../assets/fleche.png";
import Image from 'next/image';
import Link from 'next/link'
const button = ({page,name_page}) => {
    return (
        <div className='button'>
            <div className='button_about'>
                    <Link href={page}>{name_page}</Link>
                    <Image
                        className='fleche'
                        src={fleche}
                        width={30}
                        height={30}
                    />
                </div>
        </div>
    );
};

export default button;