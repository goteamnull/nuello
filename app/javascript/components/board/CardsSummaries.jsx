import React from 'react';
import PropTypes from 'prop-types';

import CardSummary from './CardSummary';

const CardsSummaries = (props) => {
  const cards = props.cards.map((card) => (
    <CardSummary
      key={card.id}
      card={card}
    />
  ));

  const dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      props.addContainerToDrake(componentBackingInstance);
    }
  };

  return (
    <div id="cards-container" data-id="list-1-cards" ref={dragulaDecorator}>
      {cards}
    </div>
  );
};

CardsSummaries.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardsSummaries;
