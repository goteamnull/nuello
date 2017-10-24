import React from 'react';
import ListTitleForm from './ListTitleForm';

import { shallow } from 'enzyme';

describe("ListTitleForm", () => {
  it("displays the `title` prop", () => {
    const wrapper = shallow(
      <ListTitleForm
        title="Hello world!"
        onTextChange={() => {}}
        onSubmit={() => {}}
      />
    );

    expect(
      wrapper.html().indexOf('value="Hello world!')
    ).not.toBe(-1)
  });
});