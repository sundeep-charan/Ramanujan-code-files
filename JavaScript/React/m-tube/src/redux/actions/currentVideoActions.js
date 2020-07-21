import {
  SET_CURRENT_VIDEO,
  TOGGLE_CURRENT_VIDEO_FETCHING_STATE,
  SET_COMMENTS
} from "../actionTypes";
import axios from "axios";
import config from "../../config";

export const fetchVideo = videoId => async dispatch => {
  try {
    dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });
    const { data } = await axios(
      `${config.BASE_URL}/videos?part=snippet,contentDetails,statistics&key=${config.API_KEY}&id=${videoId}`
    );
    console.log(data);
    dispatch({ type: SET_CURRENT_VIDEO, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });
  }
};

export const fetchComments = videoId => async dispatch => {
  try {
    dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });
    const { data } = await axios(
      `${config.BASE_URL}/commentThreads?part=snippet,replies&key=${config.API_KEY}&videoId=${videoId}`
    );
    console.log(data);
    dispatch({ type: SET_COMMENTS, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });
  }
};
