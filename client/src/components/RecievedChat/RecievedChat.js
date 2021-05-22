function RecievedChat({ theme, recieverData, message }) {
    return (
        <li className="chat-right" key={message.id}>
            <div className={theme=='dark' ? "chat-hour text-light" : "chat-hour text-dark"}>{message.sent_on} <span className="fa fa-check-circle"></span></div>
            <img className={theme == 'dark' ? "chat-text bg-secondary" : "chat-text bg-dark"} width="350px" src={message.message} style={{ borderRadius: '0', width: '250px', height: '250px' }} loading="lazy" />
            <div className="chat-avatar">
                <img src={recieverData.profile.profile_picture} alt="Reciever profile picture" />
                <div className="chat-name">{recieverData.username}</div>
            </div>
        </li>
    );
}

export default RecievedChat;