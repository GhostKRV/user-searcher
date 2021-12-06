import React from "react";
import { Link } from "react-router-dom";
import UserData from "../constants/UserData";
import "../styles/styles.css";

export interface Props {
  usersData: UserData[];
}

const UsersTable = (props: Props) => {
  const table = props.usersData.map((item) => (
    <Link key={`${item.login}-key`} to={`/user/${item.login}`}>
      <div className={"table-row"}>
        <div>
          <img src={item.avatar_url} className={"user-row-avatar"} alt="ProfileAvatar" />
        </div>
        <div className={"user-row-name"}>{item.name ? item.name : item.login}</div>
        <div className={"user-row-repos"}>Repo: {item.public_repos}</div>
      </div>
    </Link>
  ));

  return <div>{table}</div>;
};

export default UsersTable;
