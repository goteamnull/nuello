import Board from './Board';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe("Board", () => {
  it("renders the board title", () => {
    const board = { id: 1, title: 'sweet board' }
    const wrapper = shallow(<Board board={board} />);

    expect(
      wrapper.containsMatchingElement(<li>sweet board</li>)
    ).toBe(true);
  });
});
