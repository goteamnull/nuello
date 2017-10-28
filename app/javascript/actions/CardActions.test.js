import React from 'react';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import apiClient from '../lib/ApiClient.js';
jest.mock('../lib/ApiClient');

import * as actions from './CardActions';
import * as types from '../constants/ActionTypes';
import * as statuses from '../constants/Statuses';

describe("Card actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    apiClient.getCard.mockClear();
    store.clearActions();
  });

  describe("fetchCardRequest", () => {
    it("returns the correct object", () => {
      expect(
        actions.fetchCardRequest()
      ).toEqual({ type: types.FETCH_CARD_REQUEST });
    });
  });

  describe("fetchCardSuccess", () => {
    it("returns the correct object", () => {
      const card = { id: 1, title: "foo card", actions: [] };

      expect(
        actions.fetchCardSuccess(card)
      ).toEqual({ type: types.FETCH_CARD_SUCCESS, card });
    });
  });

  describe("action creators", () => {
    let storeActions;

    const card = {
      id: 1,
      title: "bar card",
      actions: [],
    };

    describe("fetchCard", () => {
      beforeEach(() => {
        store.dispatch(actions.fetchCard(card.id));

        const invocationArgs = apiClient.getCard.mock.calls[0];
        const callback = invocationArgs[1];

        callback(card);
        storeActions = store.getActions();
      });

      it("dispatches fetchCardRequest()", () => {
        expect(storeActions[0]).toEqual(actions.fetchCardRequest());
      });

      it("dispatches fetchCardSuccess()", () => {
        expect(storeActions[1]).toEqual(actions.fetchCardSuccess(card));
      });
    });
  });
});

