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
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchBoard(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = this.context.store.getState();
    const board = state.boards.find(board =>
      board.id === Number(this.props.match.params.id)
    );

    if (board) {
      return (
        <Board board={board} />
      );
    } else {
      return null;
    }
  }
}

export default BoardContainer;
