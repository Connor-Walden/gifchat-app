function SentChat({ theme, userData, message }) {
    return (
        <li className="chat-left" key={message.id}>
            <div className="chat-avatar">
                <img src={userData.profile.profile_picture} alt="Sender profile picture" />
                <div className="chat-name">{userData.username}</div>
            </div>
            <img className={theme == 'dark' ? "chat-text bg-secondary" : "chat-text bg-dark"} src={message.message} style={{ borderRadius: '0', width: '250px', height: '250px' }} />
            <div className={theme=='dark' ? "chat-hour text-light" : "chat-hour text-dark"}>{message.sent_on} <span className="fa fa-check-circle"></span></div>
        </li>
    );
}

export default SentChat;