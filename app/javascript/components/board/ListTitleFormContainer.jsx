import React from 'react';
import PropTypes from 'prop-types';

import ListTitleForm from './ListTitleForm';

import * as actions from '../../actions/ListActions';

class ListTitleFormContainer extends React.Component {
  state = {
    title: this.props.title || '',
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  static PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  handleTextChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const id = this.props.id;
    const title = this.state.title;

    this.context.store.dispatch(
      actions.updateList(id, { title })
    );

    this.props.onSave(title);
  };

  render() {
    return (
      <ListTitleForm
        title={this.state.title}
        onTextChange={this.handleTextChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default ListTitleFormContainer;
