function SentChat({ theme, userData, message }) {
    return (
        <li className="chat-left" key={message.id}>
            <div className="chat-avatar">
                <img src={userData.profile.profile_picture} alt="Sender profile picture" />
                <div className="chat-name">{userData.username}</div>
            </div>
            <div className={theme=='dark' ? "chat-text text-dark bg-secondary" : "chat-text text-light bg-dark"}>{message.message}</div>
            <div className={theme=='dark' ? "chat-hour text-light" : "chat-hour text-dark"}>{message.sent_on} <span className="fa fa-check-circle"></span></div>
        </li>
    );
}

export default SentChat;