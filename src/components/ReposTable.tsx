import React from "react";
import ReposData from "../constants/ReposData";

export interface Props {
  userRepos: ReposData[];
  userName: string;
}

const ReposTable = (props: Props) => {
  const table = props.userRepos.map((item: ReposData) => (
    <a key={`${item.name}-key`} href={`http://github.com/${props.userName}?tab=repositories`}>
      <div
        style={{
          display: "flex",

          width: "500px",
          border: "1px solid black",
        }}
      >
        <div style={{ width: "400px", padding: "10px" }}>{item.name}</div>
        <div>
          <div style={{ width: "100px", padding: "2px", textAlign: "end" }}>
            Forks: {item.forks_count}
          </div>
          <div style={{ width: "100px", padding: "2px", textAlign: "end" }}>
            Stars: {item.watchers_count}
          </div>
        </div>
      </div>
    </a>
  ));

  return <div>{table}</div>;
};

export default ReposTable;
