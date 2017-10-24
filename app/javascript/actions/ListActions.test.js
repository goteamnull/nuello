import React from 'react';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import apiClient from '../lib/ApiClient.js';
jest.mock('../lib/ApiClient');

import * as actions from './ListActions';
import * as types from '../constants/ActionTypes';
import * as statuses from '../constants/Statuses';

describe("List actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    apiClient.updateList.mockClear();
    store.clearActions();
  });

  describe("updateListRequest", () => {
    it("returns the correct object", () => {
      expect(
        actions.updateListRequest()
      ).toEqual({ type: types.UPDATE_LIST_REQUEST });
    });
  });

  describe("updateListSuccess", () => {
    it("returns the correct object", () => {
      const list = { id: 1, title: "foo list" };

      expect(
        actions.updateListSuccess(list)
      ).toEqual({ type: types.UPDATE_LIST_SUCCESS, list });
    });
  });

  describe("action creators", () => {
    let storeActions;

    const update = {
      title: "My updated title",
      position: 54321
    };

    const list = {
      id: 1,
      title: "My updated title",
    };

    describe("updateList", () => {
      beforeEach(() => {
        store.dispatch(actions.updateList(list.id, update));

        const invocationArgs = apiClient.updateList.mock.calls[0];
        const callback = invocationArgs[2];

        callback(list);
        storeActions = store.getActions();
      });

      it("dispatches updateListRequest()", () => {
        expect(storeActions[0]).toEqual(actions.updateListRequest());
      });

      it("dispatches updateListSuccess()", () => {
        expect(storeActions[1]).toEqual(actions.updateListSuccess(list));
      });
    });
  });
});
