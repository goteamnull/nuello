import React from 'react';
import PropTypes from 'prop-types';

import CardSummary from './CardSummary';

const CardsSummaries = (props) => {
  const handleOnDrop = (event, id) => {
    if (listChanged(id)) {
      console.log('list changed');
    } else {
      console.log('same list');
    }
  };

  const cards = props.cards.map((card) => (
    <CardSummary
      key={card.id}
      card={card}
      onDrop={(event) => handleOnDrop(event, card.id)}
    />
  ));

  const dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      props.addContainerToDrake(componentBackingInstance);
    }
  };

  const listChanged = (id) => {
    !props.cards.find((card) => card.id === id);
  };

  return (
    <div id="cards-container" data-id="list-1-cards" ref={dragulaDecorator}>
      {cards}
    </div>
  );
};

CardsSummaries.propTypes = {
  cards: PropTypes.array.isRequired,
  listId: PropTypes.number.isRequired,
};

export default CardsSummaries;
