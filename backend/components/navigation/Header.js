import { useRouter } from 'next/router';
import styles from '../../styles/Header.module.css';
import { Localstorage_logout } from '../localStorage';
import { AppPages, websitePages } from './page_links';
import TheLogo from '../logo';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({userDetails, setUserDetails, userId, webPage}) => {
  const router = useRouter()
  const handleLogout = () =>{
    Localstorage_logout()
    setUserDetails(null)
    //router.push('/')
    router.push(AppPages.find(page=>page.name==='Login').path)
  }
  const [activePage,setActive]=useState('/#')
  console.log('webPage on header: ', webPage)
  const sample_user_img = 'https://toppng.com/uploads/preview/vu-thi-ha-user-pro-icon-115534024853ae3gswzwd.png'
  return (
    <nav id={styles.mainNav}>
      <div className={styles.logoHolder}>
        <TheLogo header={true} />
      </div>
      <div className={`${styles.account} ${webPage? styles.website:''}`}>
        {userDetails && (
          <>
            <div className={styles.user}>
              <Image src={userDetails.image ? userDetails.image : sample_user_img}
                alt="User Profile" width={50} height={50} 
              />
              <h6> Martin L</h6>
            </div>
            {!webPage&&(
              <div className={styles.form}>
                <button type='submit' onClick={handleLogout} className={styles.logout}> 
                  Logout <i className='fas fa-sign-out-alt'></i>
                </button>
              </div>
            )}
          </>
        )}
      </div>
      {webPage && (
        <div className={styles.links}>
          {websitePages.map((page,index)=>(
            <Link href={page.path} key={index} className={activePage===page.path? styles.active: ''} onClick={()=>setActive(page.path)}>
              {page.linkText}
            </Link>
          ))}
          {webPage&&(
            <Link href={userId? userId : AppPages.find(page=>page.name === 'Login').path} className={styles.changeLink}>
              Admin Page
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
