import List from './List';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe("List", () => {
  it("contains a link to add a card", () => {
    const list = { id: 1, title: "my todos" };
    const wrapper = shallow(<List list={list} />);

    expect(
      wrapper.containsMatchingElement(
        <div className="add-card-toggle">Add a card...</div>
      )
    ).toBe(true);
  });
});