import styles from '../../styles/Footer.module.css';
import { AppPages, websitePages } from './page_links';
import TheLogo from '../logo';
import { useState } from 'react';
import Link from 'next/link';
const Footer = ({userId, webPage}) => {
  const [activePage,setActive]=useState('/#')
  return (
    <nav id={styles.mainFooter}>
      <div className={styles.logoHolder}>
        <TheLogo footer={true} />
      </div>
      {webPage && (
        <ul className={styles.links}>
          {websitePages.map((page,index)=>(
            <li key={index}>
              <Link href={page.path} key={index} className={activePage===page.path? styles.active: ''} onClick={()=>setActive(page.path)}>
                {page.linkText}
              </Link>
            </li>
          ))}
          {webPage&&(
            <li>
              <Link href={userId? userId : AppPages.find(page=>page.name === 'Login').path} className={styles.changeLink}>
                Admin Page
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Footer;
