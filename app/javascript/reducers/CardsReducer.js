export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const updatedLists = action.board.lists;
    const cards = updatedLists.map(list => list.cards);
    const updatedCards = [].concat(...cards);
    // const excludedCards = state.filter((list) => list.board_id !== action.board.id);
    const unchangedCards = state.filter((stateCard) => {
      return !updatedCards.some((card) => stateCard.id === card.id);
    });

    return [...unchangedCards, ...updatedCards];
  } else if (action.type === 'FETCH_CARD_SUCCESS') {
    // take out comments, update the fetched card
    // return all other cards summaries + fetched complete card
    return state;
  } else {
    return state;
  }
}
