import axios from 'axios';
import { useState, useEffect } from 'react';
import API from '../../utils/API';
const api = new API();

function GiphyGrid({ search, userData, recieverData, socket, setUserMessage, update}) {
  const [gifs, setGifs] = useState({});

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(search)
      fetchGifs();
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [search])

  const fetchGifs = () => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=2vBZ5mlMlGYSAZuyVm7BIlbx8TuiAARF&limit=10`)
    .then(res => {
      setGifs(res.data.data);
      console.log(res.data.data);
    });
  }

  const sendMessage = (msg) => {
    api.createMessage({
      sender_id: userData.id,
      reciever_id: recieverData.id,
      message: msg
    }).then(data => {
      socket.emit('message_send', data.data.reciever_id)
      setUserMessage('');
      update()
    });
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 offset-2'>
          <br />
          {gifs.length > 0 
          ? gifs.map(gif => {
            return (
              <img 
                width="250px" 
                src={gif.images.fixed_height_small.url} 
                onClick={() => sendMessage(gif.images.fixed_height_small.url)} 
                key={gif.id} 
                loading="lazy" 
              />
            );
          }) 
          : <></>}
        </div>
      </div>
    </div>
  );
}

export default GiphyGrid;