import { useRouter } from 'next/router';
import styles from '../../styles/Header.module.css';

const Header = ({userDetails, setUserDetails}) => {
  const router = useRouter()
  const handleLogout = () =>{
    localStorage.setItem('logged_ECOSWAP_user', JSON.stringify(null));
    setUserDetails(null)
    router.push('/')
  }
  return (
    <nav id={styles.mainNav}>
      <div className={styles.logoimg}>
        <span className= {styles.logo} > 
          eco<b className={styles.colored}>
          SWAP
          </b>
        </span>
      </div>
      <div className={styles.account}>
        {userDetails && (
          <>
            <div className={styles.user}>
              <img src={userDetails.image?userDetails:'https://toppng.com/uploads/preview/vu-thi-ha-user-pro-icon-115534024853ae3gswzwd.png'}/>
              <h6> Martin L</h6>
            </div>
            <div className={styles.form}>
              <button type='submit' onClick={handleLogout} className={styles.logout}> 
                Logout <i className='fas fa-sign-out-alt'></i>
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
