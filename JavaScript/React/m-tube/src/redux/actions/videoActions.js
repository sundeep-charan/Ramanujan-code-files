import { SET_VIDEOS, TOGGLE_VIDEO_FETCHING_STATE } from "../actionTypes";
import axios from "axios";
import config from "../../config";

export const fetchTrendingVideos = (pageToken = "") => async dispatch => {
  try {
    dispatch({ type: SET_VIDEOS, payload: null });
    dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });
    const { data } = await axios(
      `${config.BASE_URL}/videos?part=snippet&key=${
        config.API_KEY
      }&regionCode=IN&chart=mostPopular&maxResults=15${
        pageToken.length !== 0 ? "&pageToken=" + pageToken : ""
      }`
    );
    console.log(data);
    dispatch({ type: SET_VIDEOS, payload: data });
  } catch (err) {
    alert(err.response.data.error.message);
    dispatch({ type: SET_VIDEOS, payload: { items: [] } });
  } finally {
    dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });
  }
};

export const fetchSearchVideos = (
  searchQuery,
  pageToken = ""
) => async dispatch => {
  try {
    dispatch({ type: SET_VIDEOS, payload: null });
    dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });
    const { data } = await axios(
      `${config.BASE_URL}/search?part=snippet&key=${
        config.API_KEY
      }&regionCode=IN&type=video&chart=mostPopular&maxResults=15${
        pageToken.length !== 0 ? "&pageToken=" + pageToken : ""
      }&q=${searchQuery}`
    );
    console.log(data);
    dispatch({ type: SET_VIDEOS, payload: data });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });
  }
};
