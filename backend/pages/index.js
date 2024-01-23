import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { RotatingPage } from '../components/navigation/rotatingPage';
import WebHomepage from './web';
const Index = ({ userDetails, userId, loading, setLoading, webPage}) => {
  const router = useRouter();
  useEffect(() => {
    console.log('4444444')
    setTimeout(() => {
      setLoading(false);
      if (userDetails && userDetails != '' && userDetails.type && !webPage){
        router.push(`/${userId}`);
      }
    }, 2000); 
  }, [userDetails, userId]);

  return (
    <>
      {loading ? (
        <>{RotatingPage()}</>
      ) : (
        <WebHomepage/>
      )}
    </>
  );
};

export default Index;
