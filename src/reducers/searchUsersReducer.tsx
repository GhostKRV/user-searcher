import { SearchUsers } from "../constants/searchUsers";
import { SearchUsersActions } from "../actions/SearchUsersActions";

export interface SearchUsersStore {
  loading: boolean;
  data: any[];
  error?: Error;
}

const defaultState: SearchUsersStore = {
  data: [],
  loading: true,
};

export const searchUsersReducer = (state = defaultState, action: SearchUsersActions) => {
  switch (action.type) {
    case SearchUsers.SEARCH_USERS_INFLIGHT:
      return {
        ...state,
        loading: true,
      };
    case SearchUsers.SEARCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case SearchUsers.SEARCH_USERS_FAILURE:
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
