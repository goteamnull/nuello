import React from 'react';
import ListTitle from './ListTitle';

import { shallow } from 'enzyme';

describe("ListTitle", () => {
  it("displays the list title", () => {
    const wrapper = shallow(
      <ListTitle
        title="My list's title"
        onDoubleClick={() => {}}
      />
    );

    expect(
      wrapper.containsMatchingElement(
        <p>My list's title</p>
      )
    ).toBe(true);
  });
});
