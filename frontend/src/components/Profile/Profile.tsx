import "./Profile.css";
import profilePic from "../../assets/pp.png";

const Profile = () => {
  return (
    <div className="profile">
      <img src={profilePic} alt="pp" className="profile-pic" />
      <div className="profile-name">Musashi Miyamoto</div>
    </div>
  );
};

export default Profile;
