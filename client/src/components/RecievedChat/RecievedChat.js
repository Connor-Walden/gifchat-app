function RecievedChat({ theme, recieverData, message }) {
    return (
        <li className="chat-right" key={message.id}>
            <div className={theme=='dark' ? "chat-hour text-light" : "chat-hour text-dark"}>{message.sent_on} <span className="fa fa-check-circle"></span></div>
            <div className={theme=='dark' ? "chat-text text-dark bg-secondary" : "chat-text text-light bg-dark"}>{message.message}</div>
            <div className="chat-avatar">
                <img src={recieverData.profile.profile_picture} alt="Reciever profile picture" />
                <div className="chat-name">{recieverData.username}</div>
            </div>
        </li>
    );
}

export default RecievedChat;