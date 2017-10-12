import reducer from './BoardsReducer';
import * as types from '../constants/ActionTypes';

describe("BoardsReducer", () => {
  describe("unknown type", () => {
    it("returns the state parameter", () => {
      expect(
        reducer("param value", { type: "FAKE_TYPE_FOR_TEST" })
      ).toEqual("param value");
    });
  });

  describe("FETCH_BOARDS_SUCCESS", () => {
    it("returns the action.boards value", () => {
      expect(
        reducer([], {
          type: types.FETCH_BOARDS_SUCCESS,
          boards: [
            { id: 1, title: "My board" },
            { id: 2, title: "My other board" }
          ]
        })
      ).toEqual([
        { id: 1, title: "My board" },
        { id: 2, title: "My other board" }
      ]);
    });
  });

  describe("CREATE_BOARD_SUCCESS", () => {
    it("returns the current state with the `board` action value concatenated", () => {
      const board1 = { id: 1, title: "Old board", };
      const board2 = { id: 2, title: "New board", };

      expect(
        reducer([board1], {
          type: types.CREATE_BOARD_SUCCESS,
          board: board2,
        })
      ).toEqual([board1, board2]);
    });
  });
});
