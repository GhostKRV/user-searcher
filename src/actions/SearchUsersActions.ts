import { SearchUsers } from "../constants/searchUsers";
import axios from "axios";
import { Dispatch } from "redux";

interface SearchUsersInflight {
  type: SearchUsers.SEARCH_USERS_INFLIGHT;
}

interface SearchUsersSuccess {
  type: SearchUsers.SEARCH_USERS_SUCCESS;
  payload: any;
}

interface SearchUsersFailure {
  type: SearchUsers.SEARCH_USERS_FAILURE;
  error: Error;
}

const searchUsersInflight = () => ({
  type: SearchUsers.SEARCH_USERS_INFLIGHT,
});

const searchUsersSuccess = (data: any) => ({
  type: SearchUsers.SEARCH_USERS_SUCCESS,
  payload: data,
});

const searchUsersFailure = (error: Error) => ({
  type: SearchUsers.SEARCH_USERS_FAILURE,
  error: error,
});

export const searchUsers = (userName: string) => {
  return (dispatch: Dispatch) => {
    dispatch(searchUsersInflight())

    axios
      .get(`https://api.github.com/search/users?q=${userName}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => dispatch(searchUsersSuccess(response.data.items)))
      .catch((error) => {
        dispatch(searchUsersFailure(error));
      });
  };
};

export type SearchUsersActions = SearchUsersInflight | SearchUsersSuccess | SearchUsersFailure;
