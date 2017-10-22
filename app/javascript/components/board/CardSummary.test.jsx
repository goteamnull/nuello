import CardSummary from './CardSummary';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe("CardSummary", () => {
  it("renders the card title", () => {
    const card = {id: 1, title: "apples and bananas"};
    const wrapper = shallow(<CardSummary card={card} />);

    expect(
      wrapper.containsMatchingElement(
        <p>apples and bananas</p>
      )
    ).toBe(true);
  });
});