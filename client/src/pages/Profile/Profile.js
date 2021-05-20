import React, { useContext, useEffect, useState } from 'react';

import FriendList from '../../components/FriendList/FriendList';

import ThemeContext from '../../utils/ThemeContext';
import LoginContext from '../../utils/LoginContext';
import API from '../../utils/API';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

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
      setFriends(data.data);
    });
  }, [userData]);

  return (
    <div>
      <br />

      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <ProfileCard theme={theme} profileData={profileData} userData={userData} />
            </div>
            <div className="col-md-8">
              {friends ? <FriendList theme={theme} friends={friends} /> : <div></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
