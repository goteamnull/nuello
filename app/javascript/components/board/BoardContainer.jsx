import React from 'react';
import PropTypes from 'prop-types';

import Board from './Board';

import * as actions from '../../actions/BoardActions';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
      this.fetchBoard();
    });
    this.fetchBoard();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  fetchBoard = () => {
    if (this.board) return;
    this.boardId = this.getBoardId();
    this.boardId && this.context.store.dispatch(
      actions.fetchBoard(this.boardId)
    );
  };

  getBoardId = () => {
    if (this.boardId) return;
    const path = this.props.location.pathname;

    switch (true) {
      case /boards/.test(path):
        return this.props.match.params.id;
      case /cards/.test(path):
        const cardId = this.props.match.params.id
        const card = this.getCard(cardId);
        return card && card.board_id;
    }
  };

  getCard = (id) => {
    const store = this.context.store;
    return store.getState().cards.find(card =>
      card.id === Number(id)
    );
  };

  getBoard = () => {
    if (!this.boardId) return;
    const state = this.context.store.getState();
    return state.boards.find(board =>
      board.id === Number(this.boardId)
    );
  };

  render() {
    this.board = this.getBoard();

    if (this.board) {
      return (
        <Board board={this.board} />
      );
    } else {
      return null;
    }
  }
}

export default BoardContainer;
