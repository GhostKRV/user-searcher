import { GetUsers } from "../constants/getUsers";
import { GetUsersActions } from "../actions/GetUsersActions";

export interface UsersStore {
  loading: boolean;
  data: any[];
  error?: Error;
}

const defaultState: UsersStore = {
  data: [],
  loading: true,
};

export const usersReducer = (state = defaultState, action: GetUsersActions) => {
  switch (action.type) {
    case GetUsers.GET_USERS_INFLIGHT:
      return {
        ...state,
        loading: true,
      };
    case GetUsers.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case GetUsers.GET_USERS_FAILURE:
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
