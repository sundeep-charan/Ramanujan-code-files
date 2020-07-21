import { combineReducers } from "redux";
// All reducers
import videoReducer from "./reducers/videoReducer";
import userReducer from "./reducers/userReducer";
import currentVideoReducer from "./reducers/currentVideoReducer";
import playlistReducer from "./reducers/playlistReducer";

const rootReducer = combineReducers({
  videoState: videoReducer,
  userState: userReducer,
  currentVideoState: currentVideoReducer,
  playlistState: playlistReducer
});

export default rootReducer;
