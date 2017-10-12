import React from 'react';
import PropTypes from 'prop-types';

import CreateBoardTileForm from './CreateBoardTileForm';

import * as actions from '../../actions/BoardActions';

class CreateBoardTileFormContainer extends React.Component {
  state = {
    title: ''
  };

  static contextTypes = {
    store: PropTypes.object
  };

  static propTypes = {
    onCloseClick: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  };

  handleTextChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newBoard = { title: this.state.title };

    this.context.store.dispatch(
      actions.createBoard(newBoard, () => {
        this.setState({
          title: ''
        });

        this.props.onSave();
      })
    );
  };

  render() {
    return (
      <CreateBoardTileForm
        onCloseClick={this.props.onCloseClick}
        onTextChange={this.handleTextChange}
        onSubmit={this.handleSubmit}
        title={this.state.title}
      />
    );
  };
}

export default CreateBoardTileFormContainer;
