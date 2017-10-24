import React from 'react';

const NewListForm = (props) => (
  <div id="new-list" className={props.className}>
    <span
      onClick={props.onSpanClick}
    >
      Add a list...
    </span>
    <input
      type="text"
      placeholder="Add a list..."
      value={props.title}
      onChange={props.onTextChange}
      ref={input => input && input.focus()}
    />
    <div>
      <input
        type="submit"
        className="button"
        value="Save"
        onClick={props.onSave}
      />
      <i
        className="x-icon icon"
        onClick={props.onCloseClick}
      ></i>
    </div>
  </div>
);

export default NewListForm;
