import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../../styles/add_page.module.css';
import componentStyles from '../../../styles/components.module.css';
import Layout from './Layout';
import { post_url } from '../../../components/navigation/routes';

const grid_name = 'user'
const AddUsers = ({userId, appData}) => {
    const user_types = ()=>{
        const types = []
        Object.keys(appData?.users).map(typ_=>{
            if(typ_ !=='all'){
                types.push(typ_[0].toUpperCase() + typ_.substring(1).replaceAll('s', ''))
            }
        })
        return types
    }
    const [error, setError] = useState(null);
    const [user, setUser] = useState({
        firstName: {type:String, value:'', text: 'First Name'},  
        lastName: {type:String, value:'', text: 'Last Name'},  
        email: {type:'email', value:'', text: 'Email'},
        PhoneNumber: {type:Number, value:'',text: 'Phone Number'}, 
        type: {type:"select", options: user_types(), value:'',text: 'User type'}, 
        password: {type:'password', value:'', text: 'Password'},
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ 
            ...prev, [name]: 
            {...prev[name], value: value}
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const missingField = Object.keys(user).find(key => !user[key]);
        if (missingField) {
            setError(`Missing ${missingField}`);
        } else {
            try {
                const the_route = post_url('users')
                const response = await axios.put(the_route, {"user": user});
                if (response.status === 200) {
                    setError('user updated successfully');
                } else {
                    setError('Failed to submit user');
                }
            } catch (error) {
                console.error('Error submitting user:', error);
                setError('Failed to submit user');
            }
        }
    };

    return (
        <Layout userId={userId}  page_name = 'Add User'>
            <div className={styles.add_page}>
                <form onSubmit={handleSubmit} className={styles[grid_name]}>
                    {error && <p className={styles.error}>{error}</p>}
                    <section className={styles[grid_name]}>
                        {
                            Object.keys(user).map((key, index)=>{
                                const thevalue = user[key].value
                                if(key !== "hospitalId"){
                                    return(
                                        <div key={index}>
                                            <label> {user[key].text}</label>
                                            <br/>
                                            {user[key].type === 'select' ?
                                                <select value={thevalue} onChange={handleChange} className={styles.input} name={key} required>
                                                    {user[key].options.map((option, the_index)=>(
                                                        <option key={the_index} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            :
                                                <input type={user[key].type} value={user[key].value}  className={styles.input}
                                                onChange={handleChange} placeholder={`${user[key].text} ...`}  name={key} required/>
                                            }
                                        </div>
                                    )
                                }
                            })
                        }
                    </section>
                    <br/>
                    <button className={componentStyles.add_button} type="submit">Submit</button>
                </form>
            </div>
        </Layout>
    );
};

export default AddUsers;
