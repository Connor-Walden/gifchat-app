import ProfileImg from '../ProfileImg/ProfileImg';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

function ProfileCard({ theme, profileData, userData }) {
    return (
        <div className={theme == 'dark' ? "card bg-dark text-light" : "card bg-light text-dark"}>
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                <ProfileImg profileData={profileData} />
                <ProfileInfo username={userData.username} profileData={profileData} />
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;