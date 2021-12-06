import React from "react";
import UserData from "../constants/UserData";
import "../styles/styles.css";

export interface Props {
  userData: UserData;
}

const UserProfile = (props: Props) => {
  const { userData } = props;

  return (
    <div className={"profile-container"}>
      <div>
        <img src={userData.avatar_url} className={"profile-avatar"} alt="ProfileAvatar" />
      </div>
      <div className={"profile-info"}>
        <div>{userData.login}</div>
        <div>{userData.name}</div>
        <div>{userData.email}</div>
        <div>{userData.location}</div>
        <div>{userData.created_at}</div>
        <div>{`${userData.followers} followers`}</div>
        <div>{`Following ${userData.following}`}</div>
      </div>
    </div>
  );
};

export default UserProfile;
