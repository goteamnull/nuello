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

  render() {
    const lists = this.context.store.getState().lists;
    return (
      <Lists lists={lists} />
    );
  }
}

export default ListsContainer;