import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../utils/ThemeContext';
import LoginContext from '../../utils/LoginContext';
import API from '../../utils/API';

const api = new API();

const AddFriends = () => {
    const { theme } = useContext(ThemeContext);
    const { userData } = useContext(LoginContext);

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        api.getUsers().then(data => setUsers(data.data));
        api.getFriends(userData.id).then(data => setFriends(data.data));
    }, []);

    const updateSearch = (event) => {
        setSearch(event.target.value);
    }

    const isFriends = (id) => {
        var isFriend = false;
        if(friends.length > 0) {
            friends.forEach(friend => {
                if (friend.friend_id === id) {
                    isFriend = true;
                }
            });
        }
        return isFriend;
    }

    const addFriend = (friend_id) => {
        api.createFriendship(userData.id, friend_id).then(data => {
            api.getFriends(userData.id).then(data => setFriends(data.data));
        });
    }

    const removeFriend = (friend_id) => {
        api.removeFriendship(userData.id, friend_id).then(data => {
            api.getFriends(userData.id).then(data => setFriends(data.data));
        });
    }

    return (
        <div>
            <br />


            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="inputPassword5" className="form-label">Search for friends</label>
                            <input
                                type="text"
                                id="friendSearch"
                                className="form-control"
                                aria-describedby="searchHelpBlock"
                                onChange={(event) => updateSearch(event)}
                                value={search}
                            />
                        </div>
                    </div>
                    <br />
                    <div className='row gutters-sm d-flex justify-content-center'>
                        <div className='col-md-6'>
                            <table className="table border-dark border-top">
                                <tbody>
                                    {users ? users.filter(item => item.username.toLowerCase().includes(search.toLowerCase()))
                                        .filter(item => item.id !== userData.id)
                                        .map(user => {
                                            return (
                                                <tr key={user.id}>
                                                    <th scope="row">{user.username}</th>
                                                    <td>
                                                        {isFriends(user.id) == false ? (
                                                            <button 
                                                                type="button" 
                                                                className="btn btn-success" 
                                                                style={{ float: 'right' }}
                                                                onClick={() => addFriend(user.id)}
                                                            >Add</button>
                                                        ) : (
                                                            <button 
                                                                type="button" 
                                                                className="btn btn-danger" 
                                                                style={{ float: 'right' }}
                                                                onClick={() => removeFriend(user.id)}
                                                            >Remove</button>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        }) : (
                                        <div>
                                        </div>
                                    )}
                                </tbody>
                            </table>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFriends;
