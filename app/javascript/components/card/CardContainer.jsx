import React from 'react';
import PropTypes from 'prop-types';

import BoardContainer from '../board/BoardContainer';
import Card from './Card';

import * as actions from '../../actions/CardActions';

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    const id = this.props.match.params.id;
    store.dispatch(actions.fetchCard(id));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCard = () => {
    const store = this.context.store;
    const id = this.props.match.params.id;

    return store.getState().cards.find(card =>
      card.id === Number(id)
    );
  };

  getListTitle = (id) => {
    const store = this.context.store;
    const list = store.getState().lists.find(list =>
      list.id === id
    );

    return list && list.title;
  }

  render() {
    const card = this.getCard();

    if (card) {
      return (
        <Card
          card={card}
          getListTitle={this.getListTitle}
        />
      );
    } else {
      return null;
    }
  }
}

export default CardContainer;
