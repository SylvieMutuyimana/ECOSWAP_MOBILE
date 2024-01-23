import { AppPages } from '../components/navigation/page_links';
import styles from '../styles/App.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/global.css';
import AppLayout from './Layout';
import {getUserFromLocalStorage} from '../components/localStorage';
import { RotatingPage } from '../components/navigation/rotatingPage';
import {startComponents_ } from '../components/sampledata/some_components_';

function App({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = useRouter();
  console.log('pathname:', pathname)
  const starting_Components = startComponents_
  const [userDetails, setUserDetails] = useState(null);
  const [userId, setUserID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);
  const returnPath = (the_name)=> AppPages.find(page=>page.name === the_name)?.path
  /*const [appData, setappData] = useState({
    all_items: 'nullData', sold_items: 'nullData', un_sold_items: 'nullData',
    categories: 'nullData', users: 'nullData'
  })
  const [orgDetails, setOrgDetails] = useState(org_details)
  */
  const [appData, setappData] = useState(starting_Components)
  const [orgDetails, setOrgDetails] = useState(starting_Components.organisation)
  const indexPage= ['/', '']
  const authLinks= ['Login', 'Signup']
  const anAuthPage =()=>{
    let status
    authLinks.map((name, index)=>{
      if(returnPath(name)===pathname){
        status= true
      }
      if(!status && index===authLinks.length-1){
        status = false
      }
    })
    return status
  }
  const the_webpage = () => indexPage.some(path=>path===pathname)
  const [authPage, setAuthPage] = useState(anAuthPage());
  const [webPage, setwebPage] = useState(the_webpage());
  const missing_data = ()=>{
    if(!appData.all_items || !appData.sold_items || !appData.unsold_items || !appData.categories || 
      !appData.users || !appData.wishlist|| !appData.cart|| !appData.purchases|| !appData.organisation){
        return true
    }else{return false}
  }
  
  useEffect(() => {
    setAuthPage(anAuthPage());
    setwebPage(the_webpage());
  },[pathname]);

  useEffect(()=>{
    console.log('checking data existence')
    const missing__ = missing_data()
    setLoadingData(missing__)
  },[loadingData])

  useEffect(() => {
    console.log('checking user details')
    const the_user = getUserFromLocalStorage();
    if(the_user) {
      console.log('user details exist')
      if(!userDetails && the_user){
        console.log('authenticating user')
        setUserDetails(the_user)
        setUserID(the_user._id)
      }
    }else if (pathname!== !anAuthPage) {
      console.log('authentication page')
      router.push('')
    }
  },[pathname, userDetails]);

  useEffect(()=>{
    console.log('checking loading')
    if(loadingData && userId && userDetails){
      //const the_data = fetchData()
      const the_data = starting_Components
      setappData(the_data)
      setOrgDetails(the_data.organisation)
    }
  },[loadingData, userDetails, userId])
  return (
    <AppLayout userDetails={userDetails} userId={userId} webPage={webPage}
      setUserDetails={setUserDetails} authPage={authPage} setAuthPage={setAuthPage}
    >
      <section className={styles.content}>
        {webPage || authPage?(
          <Component
            {...pageProps}
            userDetails={userDetails}
            setUserDetails = {setUserDetails}
            setUserID = {setUserID}
            userId={userId}
            loading ={loading}
            setLoading={setLoading}
            webPage={webPage}
            orgDetails={orgDetails}
          />
        ):(
          <>
            {loadingData ? (
              <>Fetching Data{RotatingPage()}</>
            ) : (
              <Component
                {...pageProps}
                userDetails={userDetails}
                userId={userId}
                orgDetails={orgDetails}
                appData={appData}
              />
            )}
          </>
        )}
      </section>
    </AppLayout>
  );
  
}

export default App;
