import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list };
}

export function updateList(id, update) {
  return function(dispatch) {
    dispatch(updateListRequest());
    apiClient.updateList(id, update, list =>
      dispatch(updateListSuccess(list))
    );
  };
}
