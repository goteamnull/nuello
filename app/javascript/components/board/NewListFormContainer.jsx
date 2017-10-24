import React from 'react';
import PropTypes from 'prop-types';

import NewListForm from './NewListForm';

import * as actions from '../../actions/BoardActions';

class NewListFormContainer extends React.Component {
  state = {
    title: '',
    active: false
  };

  static contextTypes = {
    store: PropTypes.object
  }

  static propTypes = {
    boardId: PropTypes.number.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getClassName = () => (
    this.state.active ? 'new-list selected' : 'new-list'
  );

  handleTextChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleSpanClick = () => {
    this.setState({
      active: true
    });
  };

  handleCloseClick = () => {
    this.setInactive();
  };

  setInactive = () => {
    this.setState({
      active: false
    });
  };

  handleSave = () => {
    const newList = {
      board_id: this.props.boardId,
      list: {
        title: this.state.title
      }
    };

    this.context.store.dispatch(
      actions.createList(newList, () => {
        this.setState({
          title: ''
        });

        this.setInactive();
      })
    );
  };

  render() {
    return (
      <NewListForm
        className={this.getClassName()}
        title={this.state.title}
        onTextChange={this.handleTextChange}
        onSpanClick={this.handleSpanClick}
        onCloseClick={this.handleCloseClick}
        onSave={this.handleSave}
      />
    );
  }
}

export default NewListFormContainer;
