import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const CardSummary = (props) => {
  const card = props.card;

  return (
    <Link
      to={`/cards/${card.id}`}
      className="card-link"
      onDrop={props.onDrop}
    >
      <div className="card-background">
        <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            <div className="card-label green colorblindable">
            </div><div className="card-label yellow colorblindable">
            </div><div className="card-label red colorblindable">
            </div><div className="card-label orange colorblindable">
            </div><div className="card-label blue colorblindable">
            </div><div className="card-label purple colorblindable">
            </div>
            <p>{card.title}</p>
          </div>
          <div className="card-icons"><i className="clock-icon sm-icon overdue-recent completed">{card.due_date}</i><i className="description-icon sm-icon"></i><i className="comment-icon sm-icon"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

CardSummary.propTypes = {
  card: PropTypes.object.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default CardSummary;
