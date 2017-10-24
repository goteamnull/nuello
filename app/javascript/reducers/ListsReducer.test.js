import reducer from './ListsReducer';
import * as types from '../constants/ActionTypes';

describe("ListsReducer", () => {
  describe("unknown type", () => {
    it("returns the state parameter", () => {
      expect(
        reducer("param value", { type: "FAKE_TYPE_FOR_TEST" })
      ).toEqual("param value");
    });
  });

  describe("FETCH_BOARD_SUCCESS", () => {
    it("returns the updated lists", () => {
      const list1 = { id: 1, title: "Old list", };
      const updatedList1 = { id: 1, title: "New list one", };
      const list2 = { id: 2, title: "Old list two", };
      const updatedList2 = { id: 2, title: "New list two", };
      const list3 = { id: 3, title: "Old list three", };
      const updatedBoard = { id: 1, title: "Boardy Name", lists: [updatedList1, updatedList2]}

      expect(
        reducer([list1, list2, list3], {
          type: types.FETCH_BOARD_SUCCESS,
          board: updatedBoard,
        })
      ).toEqual([list3, updatedList1, updatedList2]);
    });
  });

  describe("UPDATE_LIST_SUCCESS", () => {
    it("returns the updated list with the other ones", () => {
      const list1 = { id: 1, title: "My old title" };
      const updatedList1 = { id: 1, title: "My new and improved title" };
      const list2 = { id: 2, title: "Some other list" };
      const list3 = { id: 3, title: "Another list" };

      expect(
        reducer([list1, list2, list3], {
          type: types.UPDATE_LIST_SUCCESS,
          list: updatedList1,
        })
      ).toEqual([list2, list3, updatedList1]);
    });
  });
});