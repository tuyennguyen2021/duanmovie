import { combineReducers } from "redux";
import listMovieReducer from "containers/HomeTemplate/ListMoviePage/reducer";
import detailMovieReducer from "containers/HomeTemplate/DetailMovie/reducer";
import authReducer from "containers/AdminTemplate/AuthPage/Reducer";
import addReducer from "containers/AdminTemplate/AddUserPage/Reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addReducer,
});

export default rootReducer;
