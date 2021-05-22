import React, { useContext, useEffect, useState } from 'react';

import FriendsTable from '../../components/FriendsTable/FriendsTable';
import UserSearch from '../../components/UserSearch/UserSearch';

import LoginContext from '../../utils/LoginContext';
import API from '../../utils/API';

const api = new API();

const AddFriends = () => {
    const { userData } = useContext(LoginContext);

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        api.getUsers().then(data => setUsers(data.data));
        api.getFriends(userData.id).then(data => setFriends(data.data));
    }, [userData]);

    const updateSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <br />
            <div className="container">
                <div className="main-body">
                    <UserSearch search={search} updateSearch={(event) => updateSearch(event)} />
                    <br />
                    <div className='row gutters-sm d-flex justify-content-center'>
                        <div className='col-md-6'>
                            <FriendsTable users={users} search={search} friends={friends} userData={userData} setFriends={(data) => setFriends(data)} />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFriends;
