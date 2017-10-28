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
    // const id = this.props.match.params.id;
    // store.dispatch(actions.fetchCard(id));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  // getCard = () => {
  //   const store = this.context.store;
  //   const id = this.props.match.params.id;
  //   store.dispatch(actions.fetchCard(id));
  // };

  // getBoardId = (card) => {

  // };

  render() {
    const match = {
      params: {
        id: 1,
      }
    }

    const card = {};

    if (card) {
      return (
        <div>
          <BoardContainer match={match} />
          <Card
            card={card}
            boardId={match.params.id}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CardContainer;
