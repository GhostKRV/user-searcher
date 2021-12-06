import axios from "axios";
import { Dispatch } from "redux";
import { GetRepos } from "../constants/getRepos";

interface GetReposInflight {
  type: GetRepos.GET_REPOS_INFLIGHT;
}

interface GetReposSuccess {
  type: GetRepos.GET_REPOS_SUCCESS;
  payload: { value: string };
}

interface GetReposFailure {
  type: GetRepos.GET_REPOS_FAILURE;
  error: Error;
}

const getReposInflight = () => ({
  type: GetRepos.GET_REPOS_INFLIGHT,
});

const getReposSuccess = (data: any) => ({
  type: GetRepos.GET_REPOS_SUCCESS,
  payload: data,
});

const getReposFailure = (error: Error) => ({
  type: GetRepos.GET_REPOS_FAILURE,
  error: error,
});

export const getRepos = (userName: string) => {
  return (dispatch: Dispatch) => {
    dispatch(getReposInflight());

    axios
      .get(`https://api.github.com/users/${userName}/repos`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => dispatch(getReposSuccess(response.data)))
      .catch((error) => {
        dispatch(getReposFailure(error));
      });
  };
};

export type GetReposActions = GetReposInflight | GetReposSuccess | GetReposFailure;
