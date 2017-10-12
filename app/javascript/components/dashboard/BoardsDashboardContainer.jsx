import React from 'react';
import PropTypes from 'prop-types';

import BoardsDashboard from './BoardsDashboard';

import * as actions from '../../actions/BoardActions';

class BoardsDashboardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchBoards());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  allBoards = () => {
    const store = this.context.store;
    return store.getState().boards;
  }

  render() {
    return (
      <div>
        <BoardsDashboard boards={this.allBoards()} />
      </div>
    )
  }
}

export default BoardsDashboardContainer;
