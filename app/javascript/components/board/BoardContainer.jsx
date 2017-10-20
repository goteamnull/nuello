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
    const board = this.context.store.getState().boards.find(board => board.id === Number(this.props.match.params.id));

    return (
      <Board board={board}/>
    );
  }
}

export default BoardContainer;
