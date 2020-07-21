import axios from "axios";
import { SET_PLAYLISTS, TOGGLE_PLAYLIST_FETCHING_STATE } from "../actionTypes";
import config from "../../config";

export const fetchPlaylists = (pageToken = "") => async (
  dispatch,
  getState
) => {
  const accessToken = getState().userState.user.access_token;
  try {
    dispatch({ type: SET_PLAYLISTS, payload: null });
    dispatch({ type: TOGGLE_PLAYLIST_FETCHING_STATE });
    const { data } = await axios(
      `${config.BASE_URL}/playlists?part=snippet&key=${
        config.API_KEY
      }&mine=true&maxResults=20${
        pageToken.length !== 0 ? "&pageToken=" + pageToken : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json"
        }
      }
    );
    console.log(data);
    dispatch({ type: SET_PLAYLISTS, payload: data });
  } catch (err) {
    console.error(err);
    // alert(err.response.data.error.message);
    // dispatch({ type: SET_VIDEOS, payload: { items: [] } });
  } finally {
    dispatch({ type: TOGGLE_PLAYLIST_FETCHING_STATE });
  }
};

export const createPlaylist = playlist => async (dispatch, getState) => {
  const accessToken = getState().userState.user.access_token;
  try {
    dispatch({ type: TOGGLE_PLAYLIST_FETCHING_STATE });
    const { data } = await axios.post(
      `${config.BASE_URL}/playlists?part=snippet,status&key=${config.API_KEY}`,
      playlist,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json"
        }
      }
    );
    const playlistObj = getState().playlistState.playlists;
    playlistObj.items.push(data);
    dispatch({ type: SET_PLAYLISTS, payload: { ...playlistObj } });
  } catch (err) {
    console.error(err);
    // alert(err.response.data.error.message);
    // dispatch({ type: SET_VIDEOS, payload: { items: [] } });
  } finally {
    dispatch({ type: TOGGLE_PLAYLIST_FETCHING_STATE });
  }
};
