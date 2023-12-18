import React from 'react';
import styles from '../../styles/authenticate.module.css';
import pagestyles from '../../styles/components.module.css';

export default function AuthLayout({ children }) {
  return (
    <section id={styles.authenticate}>
        <div className={pagestyles.logoimg}>
          <span className={pagestyles.logo}>
            eco<b className={pagestyles.colored}>SWAP</b>
          </span>
        </div>
        
        {children}
    </section>
  );
}
