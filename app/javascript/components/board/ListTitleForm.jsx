import React from 'react';
import PropTypes from 'prop-types';

const ListTitleForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      className="list-title"
      onFocus={e => e.target.select()}
      value={props.title}
      onChange={props.onTextChange}
    />
    <input
      type="submit"
      className="hide-submit"
    />
  </form>
);

ListTitleForm.PropTypes = {
  title: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ListTitleForm;
