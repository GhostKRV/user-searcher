import { GetRepos } from "../constants/getRepos";
import { GetReposActions } from "../actions/GetReposActions";

export interface ReposStore {
  loading: boolean;
  data: any[];
  error?: Error;
}

const defaultState: ReposStore = {
  data: [],
  loading: true,
};

export const reposReducer = (state = defaultState, action: GetReposActions) => {
  switch (action.type) {
    case GetRepos.GET_REPOS_INFLIGHT:
      return {
        ...state,
        loading: true,
      };
    case GetRepos.GET_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case GetRepos.GET_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};
