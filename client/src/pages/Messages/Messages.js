import { useEffect, useState, useContext } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket();

import ChatBox from '../../components/ChatBox/ChatBox';

import API from '../../utils/API';
import LoginContext from '../../utils/LoginContext';
import ThemeContext from '../../utils/ThemeContext';
import './style.css';

const api = new API();

function Messages(props) {
    const [recieverData, setRecieverData] = useState({});
    const [userMessage, setUserMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const { userData } = useContext(LoginContext);
    const { theme } = useContext(ThemeContext);
    const [updates, setUpdates] = useState(0);

    useEffect(() => {
        socket.emit('init', userData.id);
        socket.on('recieve_message', (msg) => {
          console.log(msg);
          setUpdates(updates + 1);
        });

        if(props.match.params.id) {
            api.getUser(props.match.params.id).then((data) => {
                setRecieverData(data.data[0]);

                
                socket.emit('get_socketid', data.data[0].id);

                api.getMessages(userData.id, props.match.params.id)
                .then(data => {
                    const from = data.data;

                    api.getMessages(props.match.params.id, userData.id)
                    .then(data2 => {
                        const to = data2.data;
                        setMessageList(from.concat(to).sort((a, b) => {
                            return new Date(a.sent_on) - new Date(b.sent_on);
                        }));
                    });
                });
            })
        }
    }, [userData, updates]);
    
    const sendMessage = (event) => {
        event.preventDefault();
        api.createMessage({
            sender_id: userData.id,
            reciever_id: recieverData.id,
            message: userMessage
        }).then(data => {
            socket.emit('message_send', data.data.reciever_id);
            setUserMessage('');
            setUpdates(updates + 1);
        });
    }

    return (
        <div>
            <br />
            {recieverData.id != undefined && recieverData.id != null && recieverData.id != -1 
            ? (
            <div className="container">
                <div className="content-wrapper">
                    <div className="row gutters">
                        <div className={"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-" + theme}>
                            <div className="card m-0">
                                <div className="row no-gutters">
                                    <div className={"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-" + theme}>
                                        <div className={theme=='dark'?'selected-user text-light':'selected-user text-dark'}>
                                            <span>To: <span className="name">{recieverData.username}</span></span>
                                        </div>
                                        <div className="chat-container">
                                            <ChatBox theme={theme} messageList={messageList} userData={userData} recieverData={recieverData} />
                                            <div className="form-group mt-3 mb-0">
                                                <form onSubmit={(event) => sendMessage(event)}>
                                                    <input type="text" className="form-control" placeholder="Type your message here..." value={userMessage} onChange={(event) => setUserMessage(event.target.value)} />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ):(
                <div></div>
            )}
        </div>
    );
}

export default Messages;