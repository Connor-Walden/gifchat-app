import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({theme, friends}) {
    return (
        <div className={theme == 'dark' ? "card bg-dark text-light" : "card bg-light text-dark"}>
            <div className="card-body">
                FRIENDS
                <ul className={theme == 'dark' ? "list-group bg-dark text-light" : "list-group bg-light text-dark"}>
                    
                    {friends.map(friend => {
                        return (
                            <FriendListItem theme={theme} friend={friend} key={friend.user.id} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default FriendList;