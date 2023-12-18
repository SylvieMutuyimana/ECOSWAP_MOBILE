import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../../styles/add_page.module.css';
import componentStyles from '../../../styles/components.module.css';
import Layout from './Layout';
import { post_url } from '../../../components/navigation/routes';

const grid_name = 'user'
const AddUsers = ({userId}) => {
    const all_specialisations = ['General', 'Gynocology','other']
    const hospitalId= '64f84aec97e2b9e0c45f8fe1'
    const [error, setError] = useState(null);
    const [user, setUser] = useState({
        matriculation: {type:Number, value:'', text: 'Matriculation Number'},
        firstName: {type:String, value:'', text: 'First Name'},  
        lastName: {type:String, value:'', text: 'Last Name'},  
        PhoneNumber: {type:Number, value:'',text: 'Phone Number'}, 
        designation: {type:"select", options: all_specialisations, value:'',text: 'Specialised in'}, 
        schedule: {type:String, value:'',text: 'Schedules'}, 
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
