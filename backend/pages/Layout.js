import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/navigation/Header';
import Sidebar from '../components/navigation/Sidebar';
import styles from '../styles/App.module.css';
import Footer from '../components/navigation/footer';

export default function AppLayout({children, userDetails, setUserDetails, userId, webPage, authPage}){
  const router = useRouter();
  const {pathname} = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => window.innerWidth <= 1000 ? setSidebarOpen(false):('')
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

  console.log('webPage on layout: ', webPage)
  console.log('authPage on layout: ', authPage)
  const headerSection = ()=>{
    return(
      <header className={styles.header} >
        <Header userDetails={userDetails} sidebarOpen={sidebarOpen} setUserDetails={setUserDetails} 
          webPage={webPage} userId={userId}
        />
      </header>
    )
  }
  const footerSection = ()=>{
    return(
      <footer className={styles.footer} >
        <Footer userDetails={userDetails} sidebarOpen={sidebarOpen} setUserDetails={setUserDetails} 
          webPage={webPage} userId={userId}
        />
      </footer>
    )
  }
  const articleSection = ()=>{
    return(
      <>
        <article className={
          `${styles.page_wrapper} 
          ${authPage? styles.auth:(webPage? styles.web: (sidebarOpen ? styles.big : styles.small))} 
        `} >
          {children}
        </article>
      </>
    )
  }
  const asideSection = ()=>{
    return(
      <aside className={`${styles.sidebar} ${sidebarOpen? styles.big: styles.small}`} id={styles.sidebar} >
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}
          userDetails={userDetails} userId ={userId}
        />
      </aside>
    )
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>EcoSWAP</title>
      </Head>
      <section id={styles.App} className={authPage? styles.authApp : webPage? styles.webApp:''}>
        {
          webPage?(
            <>
              {headerSection()} {articleSection()} {footerSection()}
            </>
          ):(
            authPage?(
              <>{articleSection()}</>
            ):(
              <>
                {headerSection()} {asideSection()} {articleSection()}
              </>
            )
          )
        }
      </section>
    </>
  );
}
