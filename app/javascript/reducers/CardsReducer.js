export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const updatedLists = action.board.lists;
    const cards = updatedLists.map(list => list.cards);
    const updatedCards = [].concat(...cards);
    // const excludedCards = state.filter((list) => list.board_id !== action.board.id);
    const unchangedCards = state.filter((stateCard) => {
      return !updatedCards.some((card) => stateCard.id === card.id);
    });

    return [...unchangedCards, updatedCards];
  } else {
    return state;
  }
}
