import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUsers } from "../actions/SearchUsersActions";
import { getUsers } from "../actions/GetUsersActions";
import { CombinedStore } from "../reducers/rootReducer";
import { SearchUsersStore } from "../reducers/searchUsersReducer";
import { convertSearchToNameArray } from "../utils/utils";
import { UsersStore } from "../reducers/usersReducer";
import UsersTable from "../components/UsersTable";

import "../styles/styles.css";

const SearchPage = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const dispatch = useDispatch();

  const searchStore = useSelector<CombinedStore, SearchUsersStore>(
    (store) => store.search
  );
  const usersStore = useSelector<CombinedStore, UsersStore>((store) => {
    return store.users;
  });

  React.useEffect(() => {
    if (searchValue !== "") {
      dispatch(searchUsers(searchValue));
    }
  }, [searchValue]);

  React.useEffect(() => {
    if (!searchStore.loading || !searchStore.error) {
      const foundNames = convertSearchToNameArray(searchStore.data);
      dispatch(getUsers(foundNames));
    }
  }, [searchStore]);

  const table = React.useMemo(() => {
    if (usersStore.loading) {
      return <p>Loading...</p>;
    }

    if (usersStore.error) {
      return <p>Error...</p>;
    }

    return <UsersTable usersData={usersStore.data} />;
  }, [usersStore]);

  return (
    <div className={'container'}>
      <div className={'search-wrapper'}>
        <input
          type="text"
          size={40}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div>{table}</div>
    </div>
  );
};

export default SearchPage;
