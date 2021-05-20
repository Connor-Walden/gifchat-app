import { useRef, useEffect } from 'react';

import RecievedChat from '../../components/RecievedChat/RecievedChat';
import SentChat from '../../components/SentChat/SentChat';

function ChatBox({ theme, messageList, userData, recieverData }) {
    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView());
        return <div ref={elementRef} />;
    };

    return (
        <ul className="chat-box chatContainerScroll">
            {messageList ? messageList.map(message => {
                if(message.sender_id == userData.id) 
                    return <SentChat theme={theme} userData={userData} message={message} />;
                else if(message.reciever_id == userData.id) 
                    return <RecievedChat theme={theme} recieverData={recieverData} message={message} />;
            }) : <div></div> }
            <AlwaysScrollToBottom />
        </ul>
    );
}

export default ChatBox;