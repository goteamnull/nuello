import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchCard(id) {
  return function(dispatch) {
    dispatch(fetchCardRequest());
    apiClient.getCard(id, card =>
      dispatch(fetchCardSuccess(card))
    );
  };
}