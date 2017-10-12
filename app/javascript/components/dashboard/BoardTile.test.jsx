import BoardTile from './BoardTile';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe("BoardTile", () => {
  it("renders the board title", () => {
    const wrapper = shallow(<BoardTile title="Web Development" />);

    expect(
      wrapper.containsMatchingElement(<span>Web Development</span>)
    ).toBe(true);
  });

  it("contains a link to the board", () => {
    const wrapper = mount(
      <Router>
        <BoardTile title="Web Development" id={37} />
      </Router>
    );

    expect(
      wrapper.html().match(new RegExp('<a href="/boards/37">'))
    ).not.toBe(null);
  });
});
