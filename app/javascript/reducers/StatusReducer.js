export default function statusReducer(state, action) {
  if (action.type === 'FETCH_BOARDS_REQUEST') {
    return 'FETCHING_BOARDS';
  } else if (action.type === 'FETCH_BOARDS_SUCCESS') {
    return 'BOARDS_FETCHED_SUCCESSFULLY';
  } else if (action.type === 'FETCH_BOARD_REQUEST') {
    return 'FETCHING_BOARD';
  } else if (action.type === 'FETCH_BOARD_SUCCESS') {
    return 'BOARD_FETCHED_SUCCESSFULLY';
  } else if (action.type === 'UPDATE_LIST_REQUEST') {
    return 'UPDATING_LIST';
  } else if (action.type === 'UPDATE_LIST_SUCCESS') {
    return 'LIST_UPDATED_SUCCESSFULLY';
  } else {
    return state;
  }
};
