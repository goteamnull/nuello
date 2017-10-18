export default function boardReducer(state = {}, action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    return action.board;
  } else {
    return state;
  }
}