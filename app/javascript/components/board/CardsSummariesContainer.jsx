import React from 'react';
import PropTypes from 'prop-types';

import CardsSummaries from './CardsSummaries';

class CardsSummariesContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  static propTypes = {
    listId: PropTypes.number.isRequired
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
    const cards = store.getState().cards;

    return cards.filter(card => card.list_id === this.props.listId);
  };

  render() {
    const cards = this.allCardsSummaries();

    if (cards) {
      return (
        <CardsSummaries
          cards={cards}
        />
      );
    } else {
      return null;
    }
  }
}

export default CardsSummariesContainer;
