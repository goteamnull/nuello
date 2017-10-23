import React from 'react';
import PropTypes from 'prop-types';

import Lists from './Lists';

class ListsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  static propTypes = {
    boardId: PropTypes.number.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  allLists = () => {
    const store = this.context.store;

    return store.getState().lists.filter((list) => {
      return list.board_id === this.props.boardId
    });
  };

  render() {
    const lists = this.allLists();

    if (lists) {
      return (
        <Lists
          lists={lists}
          boardId={this.props.boardId}
        />
      );
    } else {
      return null;
    }
  }
}

export default ListsContainer;
