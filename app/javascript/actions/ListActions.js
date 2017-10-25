import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function createList(list, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(list, newList => {
      dispatch(createListSuccess(newList))

      if (callback) { callback(newList); }
    })
  }
}

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
