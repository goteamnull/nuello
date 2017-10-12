import React from 'react';
import PropTypes from 'prop-types';

import BoardTile from './BoardTile';
import ToggleableCreateBoardTile from './ToggleableCreateBoardTile';

const BoardsDashboard = props => {
  let boards = props.boards.map((board) => (
    <BoardTile 
      title={board.title}
      id={board.id}
      key={board.id}
    />
  ));

  boards.push(
    <ToggleableCreateBoardTile 
      key={'new-board'}
    />
  );

  return (
    <main className="dashboard">
      <section className="board-group">
        <header>
          <div className="board-section-logo">
          <span className="person-logo"></span>
          </div>
          <h2>Personal Boards</h2>
        </header>

        <ul className="dashboard-board-tiles">
          {boards}
        </ul>
      </section>
    </main>
  );
}

BoardsDashboard.contextTypes = {
  store: PropTypes.object
};

export default BoardsDashboard;
