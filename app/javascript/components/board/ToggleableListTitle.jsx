import React from 'react';
import PropTypes from 'prop-types';

import ListTitleFormContainer from './ListTitleFormContainer';
import ListTitle from './ListTitle';

class ToggleableListTitle extends React.Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  state = {
    title: this.props.title || '',
    showForm: false,
  };

  toggleForm = (e) => {
    e && e.preventDefault();
    console.log('fired')

    this.setState({
      showForm: !this.state.showForm,
    });
  };

  handleSave = (title) => {
    this.setState({
      title: title,
    });

    this.toggleForm();
  };

  render() {
    const title = this.state.title;
    const id = this.props.id;

    if (this.state.showForm) {
      return (
        <ListTitleFormContainer
          id={id}
          title={title}
          onSave={this.handleSave}
        />
      );
    } else {
      return (
        <ListTitle
          title={title}
          onDoubleClick={this.toggleForm}
        />
      );
    }
  }
}

export default ToggleableListTitle;
