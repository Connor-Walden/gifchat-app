import UserInfo from '../UserInfo/UserInfo';

function FriendsTable({ users, search, friends, userData, setFriends }) {

    return (
        <table className="table border-dark border-top">
            <tbody>
                {users ? users.filter(item => item.username.toLowerCase().includes(search.toLowerCase()))
                    .filter(item => item.id !== userData.id)
                    .map(user => {
                        return (
                            <UserInfo user={user} userData={userData} friends={friends} key={user.id} setFriends={(data) => setFriends(data)} />
                        );
                    }) : (
                    <div>
                    </div>
                )}
            </tbody>
        </table>
    );
}

export default FriendsTable;