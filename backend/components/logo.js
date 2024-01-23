import React from 'react';
import Link from 'next/link'; 
import pagestyles from '../styles/components.module.css';

const TheLogo = ({ header, footer }) => {
    return (
        <Link href="/" style={{ textDecoration: 'none' }}>
            <div className={`${pagestyles.logoimg} ${(header || footer) ? pagestyles.header : ''}`}>
                <span className={pagestyles.logo}>
                    eco<b className={pagestyles.colored}>SWAP</b>
                </span>
            </div>
        </Link>
    );
};

export default TheLogo;
