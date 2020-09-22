import React from "react";

function Profile(props) {
  let { profile_path, name } = props.data;
  if (!profile_path) {
    profile_path = "https://via.placeholder.com/75x112?text=No+Image";
  } else {
    profile_path = "https://image.tmdb.org/t/p/w500" + profile_path;
  }
  return (
    <div className="profile">
      <img className="profileImg" alt={name} src={profile_path} />
      <div className="profileName">{name}</div>
    </div>
  );
}

export default Profile;
