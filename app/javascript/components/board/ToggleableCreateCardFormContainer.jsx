import React from 'react';
import PropTypes from 'prop-types';

import ToggleableCreateCardForm from './ToggleableCreateCardForm'
import PositionCalculator from '../../lib/PositionCalculator'

import * as actions from '../../actions/CardActions'

class ToggleableCreateCardFormContainer extends React.Component {
  state = {
    title: '',
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleTextChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleFormCloseClick = (e) => {
    e.preventDefault();
    this.props.toggleActiveDropdown(null);
  }

  calculatePosition = () => {
    const cards = this.context.store.getState().cards.filter((card) => (
      card.list_id === this.props.list_id
    ));
    return PositionCalculator(cards, cards.length);
  };

  handleSaveClick = () => {
    if (this.state.title === '') {
      return;
    }

    const newCard = {
      list_id: this.props.listId,
      card: {
       title: this.state.title,
       position: this.calculatePosition() 
      }
    };

    this.context.store.dispatch(
      actions.createCard(newCard, () => {
        this.setState({
          title: '',
        });
      })
    );
  }

  render() {
    return (
      <ToggleableCreateCardForm
        handleTextChange={this.handleTextChange}
        handleSaveClick={this.handleSaveClick}
        handleFormCloseClick={this.handleFormCloseClick}
        activeDropdown={this.props.activeDropdown}
        title={this.state.title}
      />
    );
  }
}

export default ToggleableCreateCardFormContainer;