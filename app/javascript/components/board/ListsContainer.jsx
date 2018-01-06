import React from 'react';
import PropTypes from 'prop-types';

import Lists from './Lists';
import * as actions from '../../actions/ListActions';

class ListsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  static propTypes = {
    boardId: PropTypes.number.isRequired
  };

  state = {
    activeDropdownListId: null,
  }

  toggleActiveDropdown = (id) => {
    this.setState({
      activeDropdownListId: id
    });
  }

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

  updatePosition = (id, newPosition) => {
    this.context.store.dispatch(actions.updateList(id, {
      position: newPosition
    }));
  };

  render() {
    const lists = this.allLists();

    if (lists) {
      return (
        <Lists
          lists={lists}
          boardId={this.props.boardId}
          updatePosition={this.updatePosition}
          toggleActiveDropdown={this.toggleActiveDropdown}
          activeDropdownListId={this.state.activeDropdownListId}
        />
      );
    } else {
      return null;
    }
  }
}

export default ListsContainer;
