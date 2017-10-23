import React from 'react';
import PropTypes from 'prop-types';

import ListTitleFormContainer from './ListTitleFormContainer';
import ListTitle from './ListTitle';

class ToggleableListTitle extends React.Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    showForm: false,
  };

  handleTitleClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: true,
    });
  };

  handleSave = () => {
    this.setState({
      showForm: false,
    });
  };

  render() {
    const title = this.props.title;

    if (this.state.showForm) {
      return (
        <ListTitleFormContainer
          title={title}
          onSave={this.handleSave}
        />
      );
    } else {
      return (
        <ListTitle
          title={title}
          onClick={this.handleTitleClick}
        />
      );
    }
  }
}

export default ToggleableListTitle;
