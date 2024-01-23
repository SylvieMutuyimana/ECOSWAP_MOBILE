import { useState } from 'react';
import styles from '../../../styles/allPages/app_pages.module.css';
import pageStyles from '../../../styles/allPages/specificPage.module.css';
import componentStyles from '../../../styles/components.module.css';
import Layout from './Layout';
import Users from './users';

const Home = ({ appData, userId }) => {
    const types = (type) => type[0].toUpperCase() + type.substring(1).replaceAll('s', '')
    const theTypes = ()=>{
        const typpp_ = []
        Object.keys(appData?.users).map((type,index)=>{
            if(type !== 'all'){
                typpp_.push({name: types(type),id_: type});
            }
        }); return typpp_
    }
        
    const [theUsers, setUsers] = useState(null);
    const [typeName, setTypeName] = useState(null);
    
    const handleselected = (_id) => {
        setTypeName(_id);
        setUsers(appData?.users?.[_id])
    };
    
    const removeselected = () => {
        setTypeName(null);
        setUsers(null);
    };
    
    return (
        <Layout userId={userId} add_route="/users/add" page_name={typeName ? null : 'Users List'}>
            {typeName && (
                <div>
                    <button onClick={() => removeselected()} className={componentStyles.back}>
                        <i className="fas fa-arrow-left"></i> {'  '}back
                    </button>
                </div>
            )}
            <div className={`${styles.page} ${typeName ? styles.specific : styles.index}`}>
                {
                    typeName ? (
                        <div className={pageStyles.thePage}>
                            <Users theUsers={theUsers} userId={userId} typeName={typeName} types={types}/>
                        </div>
                    ) : (
                        <div className={componentStyles.categoriesGrid}>
                            {theTypes() && theTypes().length > 0 ? (
                                theTypes().map(user_Type => (
                                <div key={user_Type.id_} className={componentStyles.card} onClick={() => handleselected( user_Type.id_)}>
                                    <h4>{user_Type.name}s</h4>
                                    <p>No of users: {appData?.users?.[user_Type.id_].length}</p>
                                </div>
                                ))
                            ) : (
                                <div>No users available</div>
                            )}
                        </div>
                    )
                }
            </div>
        </Layout>
    );
};

export default Home;
