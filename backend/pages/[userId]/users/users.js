import React, { useState, useEffect } from 'react';
import styles from '../../../styles/allPages/specificPage.module.css';
import { useRouter } from 'next/router';
import ChosenUser from './chosenUser';

const Users = ({ theUsers, typeName, types}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(null);
    const [chosenUser, setchosenUser] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setFilteredUsers(theUsers);
    }, [theUsers]);

    useEffect(() => {
        const filtered = theUsers?.filter(user =>
            user?.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user?.email?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredUsers(filtered);
        setError(filtered && filtered.length > 0 ? null : 'No matching users found');
    }, [searchQuery, theUsers]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleSelected = (data) => {
        console.log('data; ', data)
        setchosenUser(data);
    };
    return (
        <>
            {
                (chosenUser && typeName !== 'Admin')?(
                    <ChosenUser chosenUser={chosenUser} typeName={typeName}/>
                ):(
                    <>
                        <div>
                            <h3>{types(typeName)}s</h3>
                            <p>Number of users: {theUsers?.length}</p>
                        </div>
                        <div className={styles.SearchBar}>
                            <input type="text" placeholder="Search by name or email"
                                value={searchQuery} onChange={handleSearch}
                            />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th> <th>Name</th> <th>Email</th>
                                    <th>Phone</th> <th>Joining date</th>
                                </tr>
                                <tr>
                                    <td colSpan='7'><hr /></td>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers && filteredUsers.length > 0 ? (
                                    filteredUsers.map((user, index) => (
                                        <tr key={user._id} onClick={() => handleSelected(user)}>
                                            <td>{index + 1}</td> <td>{user.firstName} {user.lastName}</td>
                                            <td>{user.email}</td> <td>{user.phoneNum}</td>
                                            <td>{user.joining_date}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan='7'>
                                            {error || 'No users available'}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>                
                )
            }
        </>
    );
};

export default Users;
