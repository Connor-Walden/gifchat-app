import { Link } from 'react-router-dom';

function FriendListItem({ theme, friend }) {
    return (
        <li className={theme == 'dark' ? "list-group-item bg-dark text-light" : "list-group-item bg-light text-dark"} key={friend.id}>
            <div className='row'>
                <div className='col-6 pt-1'>
                    {friend.user.username}
                </div>
                <div className='col-6'>
                    <Link className="btn btn-primary" style={{ float: "right" }} to={"/messages/" + friend.user.id}>Message</Link>
                </div>
            </div>
        </li>
    );
}

export default FriendListItem;