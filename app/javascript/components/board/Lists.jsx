import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

const Lists = (props) => {
  if (props.lists) {
    console.log(props.lists);
    const lists = props.lists.map((list) => (
      <List 
        key={list.id}
        list={list}
      />
    ));

    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {lists}
        </div>
      </div>
    );
  } else {
    return (
      <div></div> // or can just return `null`
    );
  }
};

Lists.propTypes = {
  store: PropTypes.object,
  lists: PropTypes.array,
};

export default Lists;

// class Lists extends React.Component {
//   componentDidMount() {
//     this.lists = this.props.lists.map((list) => (
//       <List list={list} />
//     ));
//   }

//   render() {
//     return (
//       <div id="list-container" className="list-container">
//         <div id="existing-lists" className="existing-lists">
//           {this.lists}
//         </div>
//       </div>
//     );
//   }
// }

// export default Lists;
