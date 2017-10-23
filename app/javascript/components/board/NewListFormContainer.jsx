import React from 'react';
import PropTypes from 'prop-types';

import NewListForm from './NewListForm';

class NewListFormContainer extends React.Component {
  state = {
    title: '',
    selected: false
  };

  static contextTypes = {
    store: PropTypes.object
  }

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

  render() {
    return (
      <NewListForm
        selected={this.state.selected}
      />
    );
  }
}

export default NewListFormContainer;
