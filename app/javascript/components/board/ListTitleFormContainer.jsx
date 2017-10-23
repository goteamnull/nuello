import React from 'react';
import PropTypes from 'prop-types';

import ListTitleForm from './ListTitleForm';


class ListTitleFormContainer extends React.Component {
  state = {
    title: this.props.title || '',
  };

  // needs a componentWillReceiveProps? for title

  static contextTypes = {
    store: PropTypes.object,
  };

  static PropTypes = {
    title: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  handleTextChange = (e) => {
    console.log('change listening')

    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // really save
    this.props.onSave();
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
