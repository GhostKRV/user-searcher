import { combineReducers } from "redux";
import { searchUsersReducer, SearchUsersStore } from "./searchUsersReducer";
import { reposReducer, ReposStore } from "./reposReducer";
import { usersReducer, UsersStore } from "./usersReducer";

export const rootReducer = combineReducers({
  search: searchUsersReducer,
  repos: reposReducer,
  users: usersReducer,
});

export interface CombinedStore {
  search: SearchUsersStore,
  repos: ReposStore,
  users: UsersStore
}
