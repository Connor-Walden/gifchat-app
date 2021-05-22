import API from '../../utils/API';
const api = new API();

function UserInfo({ user, userData, friends, setFriends }) {
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
}

export default UserInfo;