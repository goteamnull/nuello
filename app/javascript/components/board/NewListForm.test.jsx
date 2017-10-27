import React from 'react';
import { mount } from 'enzyme';

import NewListForm from './NewListForm';

import apiClient from '../../lib/ApiClient';
jest.mock('../../lib/ApiClient');

describe("NewListForm", () => {
  it("displays the `title` prop", () => {
    const wrapper = mount(
      <NewListForm
        title="This is my title!!"
        className="new-list"
        onSpanClick={() => {}}
        onTextChange={() => {}}
        onCloseClick={() => {}}
        onSave={() => {}}
      />
    );

    expect(
      wrapper.html().indexOf('value="This is my title!!"')
    ).not.toBe(-1)
  });

  it("uses the `className` prop for its class", () => {
    const wrapper = mount(
      <NewListForm
        title=""
        className="new-list selected"
        onSpanClick={() => {}}
        onTextChange={() => {}}
        onCloseClick={() => {}}
        onSave={() => {}}
      />
    );

    expect(
      wrapper.html().indexOf('class="new-list selected"')
    ).not.toBe(-1)
  });
});
