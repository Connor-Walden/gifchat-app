function ProfileImg({ profileData }) {
    return (
        <img 
            src={profileData 
                ? profileData.profile_picture 
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
            alt="Admin" 
            className="rounded-circle" 
            width="150" 
        />
    );
}

export default ProfileImg;