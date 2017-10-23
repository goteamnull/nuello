export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const lists = action.board.lists;
    return lists
    // OR
    const excludedLists = state.filter((stateList) => {
      return !lists.some((list) => stateList.id === list.id);
    });

    return [...excludedLists, lists];
      // if (lists.find((list) => (stateList.id === list.id))) {
      //   return list;
      // } else {

      // }

      // selector(state, )
      // containers use selectors instead of having the logic live in the 
      // e.g. selectors.getListByBoardId(this.context.getState(), id)
    };
  } else {
    return state;
  }
}