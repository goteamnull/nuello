import reducer from './CardsReducer';
import * as types from '../constants/ActionTypes';

describe("CardsReducer", () => {
  describe("unknown type", () => {
    it("returns the state parameter", () => {
      expect(
        reducer("param value", { type: "FAKE_TYPE_FOR_TEST" })
      ).toEqual("param value");
    });
  });

  describe("FETCH_BOARD_SUCCESS", () => {
    it("returns the updated cards", () => {
      const card1 = { id: 1, title: "Old card", };
      const updatedCard1 = { id: 1, title: "New card one", };
      const card2 = { id: 2, title: "Old card two", };
      const updatedCard2 = { id: 2, title: "New card two", };
      const card3 = { id: 3, title: "Old card three", }; 
      const updatedList1 = { id: 1, title: "New list", cards: [updatedCard1]};
      const updatedList2 = { id: 2, title: "New list two", cards: [updatedCard2]};
      const updatedBoard = { id: 1, title: "Boardy Name", lists: [updatedList1, updatedList2]};

      expect(
        reducer([card1, card2, card3], {
          type: types.FETCH_BOARD_SUCCESS,
          board: updatedBoard,
        })
      ).toEqual([card3, updatedCard1, updatedCard2]);
    });
  });
});