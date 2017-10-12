import React from 'react';
import { mount } from 'enzyme';

import CreateBoardTileForm from './CreateBoardTileForm';

import apiClient from '../../lib/ApiClient';
jest.mock('../../lib/ApiClient');

describe("CreateBoardTileForm", () => {
  it("displays the `title` prop", () => {
    const wrapper = mount(
      <CreateBoardTileForm
        title="This is my title!!"
        onTextChange={() => {}}
        onCloseClick={() => {}}
        onSubmit={() => {}}
      />
    );

    expect(
      wrapper.html().indexOf('value="This is my title!!"')
    )
  });
});
