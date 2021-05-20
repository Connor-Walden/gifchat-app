function ProfileInfo({ username, profileData }) {
    return (
        <div className="mt-3">
            <h1>{username}</h1>
            <p>{profileData ? profileData.bio : ""}</p>
        </div>
    );
}

export default ProfileInfo;