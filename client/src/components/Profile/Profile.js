import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../utils/ThemeContext';
import LoginContext from '../../utils/LoginContext';
import API from '../../utils/API';

const api = new API();

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { userData } = useContext(LoginContext);

  const [profileData, setProfileData] = useState({});
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    api.getProfile(userData.id).then(data => {
      setProfileData(data.data);
    });

    api.getFriends(userData.id).then(data => {
      console.log(data.data);

      setFriends(data.data);
    });
  }, []);

  return (
    <div>
      <br />

      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className={theme == 'dark' ? "card bg-dark text-light" : "card bg-light text-dark"}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={profileData.profile_picture} alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <h1>{userData.username}</h1>
                      <p>{profileData.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className={theme == 'dark' ? "card bg-dark text-light" : "card bg-light text-dark"}>
                <div className="card-body">
                  FRIENDS
                  <ul className={theme == 'dark' ? "list-group bg-dark text-light" : "list-group bg-light text-dark"}>
                     
                      {friends.map(friend => {
                        return (
                          <li className={theme == 'dark' ? "list-group-item bg-dark text-light" : "list-group-item bg-light text-dark"} key={friend.id}>
                            <div className='row'>
                              <div className='col-6 pt-1'>
                                {friend.user.username}
                              </div>
                              <div className='col-6'>
                                <button type="button" className="btn btn-primary" style={{ float: "right" }}>Message</button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
