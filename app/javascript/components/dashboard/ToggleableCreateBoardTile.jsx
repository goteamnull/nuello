import React from 'react';

import CreateBoardTile from './CreateBoardTile';
import CreateBoardTileForm from './CreateBoardTileForm';
import CreateBoardTileFormContainer from './CreateBoardTileFormContainer';

class ToggleableCreateBoardTile extends React.Component {
  state = {
    showForm: false
  };

  handleTileClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: true
    });
  }

  handleFormCloseClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: false
    });
  }

  handleSave = () => {
    this.setState({
      showForm: false
    });
  };

  render() {
    if (this.state.showForm) {
      return (
        <li className="board-tile">
          <CreateBoardTileFormContainer
            onCloseClick={this.handleFormCloseClick}
            onSave={this.handleSave}
          />
        </li>
      );
    } else {
      return (
        <li className="board-tile">
          <CreateBoardTile
            onClick={this.handleTileClick}
          />
        </li>
      );
    }
  }
}

export default ToggleableCreateBoardTile;
