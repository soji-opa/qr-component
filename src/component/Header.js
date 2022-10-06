import React from 'react';
import qrcode from '../images/image-qr-code.png'

export default function Header(){
    return(
        <header>
            <nav>
                <img src={qrcode}
                alt='qrcode img'
                className='nav--img'/>
            </nav>
        </header>
    )
}