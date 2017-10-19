import React from 'react';
import PropTypes from 'prop-types';

import Lists from './Lists';

class ListsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
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
    return store.getState().board.lists;
  }

  render() {
    return (
      <Lists lists={this.allLists} />
    );
  }
}

export default ListsContainer;
