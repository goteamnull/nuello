import Card from './Card';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe("Card", () => {
  it("renders the card title", () => {
    const card = { id: 1, title: 'fake card title' };
    const wrapper = shallow(
      <Card card={card} getListTitle={() => {}} />
    );

    expect(
      wrapper.containsMatchingElement(
        <textarea value="fake card title"></textarea>
      )
    ).toBe(true);
  });
});
