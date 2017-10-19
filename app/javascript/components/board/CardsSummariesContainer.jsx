import React from 'react';
import PropTypes from 'prop-types';

import CardsSummaries from './CardsSummaries';

class CardsSummariesContainer extends React.Component {
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

  allCardsSummaries = () => {
    const store = this.context.store;
    const lists = store.getState().board.lists;

    return lists.find(list => list.id === this.props.listId).cards;
  }

  render() {
    if (this.allCardsSummaries()) {
      return (
        <CardsSummaries
          cards={this.allCardsSummaries()}
        />
      );
    } else {
      return null;
    }
  }
}

export default CardsSummariesContainer;
