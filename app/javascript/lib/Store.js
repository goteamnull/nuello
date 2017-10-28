import { createStore as cs, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import boardsReducer from '../reducers/BoardsReducer';
import statusReducer from '../reducers/StatusReducer';
import listsReducer from '../reducers/ListsReducer';
import cardsReducer from '../reducers/CardsReducer';

function reducer(state = {}, action) {
  return {
    boards: boardsReducer(state.boards, action),
    status: statusReducer(state.status, action),
    lists: listsReducer(state.lists, action),
    cards: cardsReducer(state.cards, action),
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function createStore(initialState = {}) {
  return cs(reducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));
}
