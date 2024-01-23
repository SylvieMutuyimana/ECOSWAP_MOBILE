import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/authenticate.module.css';
import AuthLayout from './layout';
import { useRouter } from 'next/router';
import { Localstorage_login, getUserFromLocalStorage } from '../../components/localStorage';
const Login = ({setUserDetails, setLoading, setUserID}) => {
  const [correctUser, setCorrectUser]= useState(false)
  const router = useRouter()
  useEffect(() => {
    if(correctUser){
      setLoading(true)
    }
  }, [correctUser])

  const [loginError, setLoginError] = useState('');

  const [details, setDetails] = useState({
    email: '', password: ''
  });

  const handleLogin = async () => {
    console.log('Login handle');
    const try_login = () =>{
      setCorrectUser(true)
      const try_user = {_id: '43j', type:'super_admin', email: 'erf@gmail.com'}
      setUserDetails(try_user)
      setUserID(try_user._id)
      console.log('login details: ', try_user)
      Localstorage_login(try_user)
      setLoginError('');
      router.push('/')
    }
    const real_login=async()=>{
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          email: details.email,
          password: details.password
        });
        if (response.status === 200) {
          setCorrectUser(true)
          const logged_user = response.data.the_user
          const user_details = {email:details.email, type:logged_user.type, _id: logged_user._id}
          setUserDetails(user_details)
          setUserID(user_details._id)
          console.log('login details: ', user_details)
          Localstorage_login(user_details)
          setLoginError('');
          console.log('user that is logging: ',getUserFromLocalStorage() )
          console.log(response)
          setLoginError(response.data.message)
        }else{
          console.log('error to log in')
        }
      } catch (error) {
        setLoginError('Invalid email or password');
        console.log('error logging in')
        console.log(error);
      }
    }
    try_login()
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AuthLayout>
        <form id={styles.login}>
          <h4>Admin Login</h4>
            <input placeholder="Enter Email" value={details.email} onChange={handleChange}
              name="email" type="email" autoComplete="current-email" required
            />
            <input placeholder="Enter Password" value={details.password} onChange={handleChange}
              name="password" type="password" autoComplete="current-password" required
            />
          <button type="button" onClick={handleLogin}>
            LOGIN
          </button>
          {loginError && <p className="error">{loginError}</p>}
          {correctUser && <p>Successfull log in</p>}
        </form>
    </AuthLayout>
  );
};

export default Login;
