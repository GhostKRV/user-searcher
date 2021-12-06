import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getRepos } from "../actions/GetReposActions";
import { CombinedStore } from "../reducers/rootReducer";
import { UsersStore } from "../reducers/usersReducer";

import ReposTable from "../components/ReposTable";
import UserProfile from "../components/UserProfile";

import "../styles/styles.css";

const UserPage = () => {
  const { userName } = useParams();
  const dispatch = useDispatch();

  const reposStore = useSelector<CombinedStore, UsersStore>((store) => {
    return store.repos;
  });

  const usersStore = useSelector<CombinedStore, UsersStore>((store) => {
    return store.users;
  });

  const userData = usersStore.data.find((user) => user.login === userName);

  React.useEffect(() => {
    dispatch(getRepos(userName as string));
  }, []);

  const table = React.useMemo(() => {
    if (reposStore.loading) {
      return <p>Loading...</p>;
    }

    if (reposStore.error) {
      return <p>Error...</p>;
    }

    return <ReposTable userRepos={reposStore.data} userName={userName as string} />;
  }, [reposStore]);

  return (
    <div className={'container'}>
      <UserProfile userData={userData} />
      {table}
    </div>
  );
};

export default UserPage;
