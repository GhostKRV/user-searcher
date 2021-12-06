import axios from "axios";
import { Dispatch } from "redux";
import { GetUsers } from "../constants/getUsers";

interface GetUsersInflight {
  type: GetUsers.GET_USERS_INFLIGHT;
}

interface GetUsersSuccess {
  type: GetUsers.GET_USERS_SUCCESS;
  payload: { value: string };
}

interface GetUsersFailure {
  type: GetUsers.GET_USERS_FAILURE;
  error: Error;
}

const getUsersInflight = () => ({
  type: GetUsers.GET_USERS_INFLIGHT,
});

const getUsersSuccess = (data: any) => ({
  type: GetUsers.GET_USERS_SUCCESS,
  payload: data,
});

const getUsersFailure = (error: Error) => ({
  type: GetUsers.GET_USERS_FAILURE,
  error: error,
});

export const getUsers = (userNames: string[]) => {
  return (dispatch: Dispatch) => {
    dispatch(getUsersInflight());

    const requests = userNames.map((user) => {
      return axios.get(`https://api.github.com/users/${user}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_API_KEY}`,
        },
      });
    });

    axios
      .all(requests)
      .then((usersData) => {
        const transformData = usersData.map((user) => user.data);
        dispatch(getUsersSuccess(transformData));
      })
      .catch((error: Error) => dispatch(getUsersFailure(error)));
  };
};

export type GetUsersActions = GetUsersInflight | GetUsersSuccess | GetUsersFailure;
