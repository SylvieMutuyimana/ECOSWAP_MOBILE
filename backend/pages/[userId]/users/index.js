import { useEffect, useState } from 'react';
import styles from '../../../styles/allPages/app_pages.module.css';
import componentStyles from '../../../styles/components.module.css';
import { useRouter } from 'next/router';
import Layout from './Layout';

const Home = ({ userType, facilityUsers, userId }) => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setfilteredUsers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setfilteredUsers(facilityUsers);
    }, [facilityUsers]);

    useEffect(() => {
        if (userType && userType === 'admin') {
            router.push('/admin/dashboard');
        }
    }, []);
    
    useEffect(()=>{
        const filtered = facilityUsers?.filter(user => {
            return user.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
        if (filtered && filtered.length > 0) {
            setfilteredUsers(filtered);
            setError(null);
        } else {
            setError("No matching users found");
        }
    },[searchQuery])
    useEffect(()=>{
        const filtered = facilityUsers?.filter(user => 
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
            || user.email.toLowerCase().includes(searchQuery.toLowerCase())
        )
        if (filtered && filtered.length > 0) {
            setfilteredUsers(filtered);
            setError(null);
        } else {
            setfilteredUsers(null)
            setError("No matching transfers found");
        }
    },[searchQuery])

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    return (
        <Layout userId={userId} add_route = '/users/add' main_page = 'true' page_name = 'Users List'>
            <div className={styles.SearchBar}>
                        <input
                            type="text"
                            placeholder="Search by name or email"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
            </div>
            <div className={`${styles.page} ${styles.index}`}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Names</th>
                                    <th>ID Number</th>
                                    <th>Phone</th>
                                    <th>Insurance</th>
                                </tr>
                                <tr><td colSpan='4'><hr/></td></tr>
                            </thead>
                            <tbody>
                                {facilityUsers &&(
                                    filteredUsers && filteredUsers.length >0?(
                                        filteredUsers.map((user) => (
                                            <tr key={user.id}>
                                                <td>
                                                    <p>{user.name}</p>
                                                    <p>{user.email}</p>
                                                </td>
                                                <td>{user.nationalId}</td>
                                                <td>{user.phoneNum}</td>
                                                <td>{user.insurance}</td>
                                            </tr>
                                        ))
                                    ):(
                                        <tr><td colSpan='4'>
                                            {error? error : 'No users available'}
                                        </td></tr>
                                    )
                                )}
                            </tbody>
                        </table>
            </div>
            <div className={componentStyles.pageNav}>
                <article>
                    Previous
                </article>
                <aside>
                    Next
                </aside>
            </div>
        </Layout>
    );
};

export default Home;
