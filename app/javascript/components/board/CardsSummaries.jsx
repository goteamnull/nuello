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

  return (
    <div id="cards-container" data-id="list-1-cards">
      {cards}
    </div>
  );
};

CardsSummaries.propTypes = {
  store: PropTypes.object,
  cards: PropTypes.array,
};

export default CardsSummaries;
