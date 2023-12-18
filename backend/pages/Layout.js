import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/navigation/Header';
import Sidebar from '../components/navigation/Sidebar';
import styles from '../styles/App.module.css';

export default function AppLayout({ children, userDetails, setUserDetails, userId}) {
  const router = useRouter();
  const {pathname} = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [authPage, setAuthPage] = useState(false);
  useEffect(() => {
    setAuthPage(pathname==='/');
  }, [pathname]);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setSidebarOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (pathname.endsWith('/')) {
      router.push(pathname.slice(0, -1));
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 1000) {
        setSidebarOpen(false);
      }
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>EcoSWAP</title>
      </Head>
      <section id={styles.App} className={authPage? styles.authApp : ''} style={pathname === '' ? { backgroundColor: 'green' } : {}}>
        {!authPage && (
          userDetails ? ( 
            <>
              <header className={styles.header} >
                <Header userDetails={userDetails} sidebarOpen={sidebarOpen} setUserDetails={setUserDetails}/>
              </header>
              <aside className={`${styles.sidebar} ${sidebarOpen? styles.big: styles.small}`} id={styles.sidebar} >
              < 
                Sidebar 
                sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}
                userDetails={userDetails}
                userId ={userId}
              />
              </aside>
            </>
          ):<></>
        )}
        <article className={
          `${styles.page_wrapper} 
          ${authPage? styles.auth: (sidebarOpen ? styles.big : styles.small)} 
        `} >
          {children}
        </article>
      </section>
    </>
  );
}
