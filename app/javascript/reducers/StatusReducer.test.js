import reducer from './StatusReducer';
import * as statuses from '../constants/Statuses';
import * as actions from '../constants/ActionTypes';
import * as constants from '../actions/BoardActions';

describe("StatusReducer", () => {
  describe("unhandled action type", () => {
    it("returns the given state", () => {
      expect(
        reducer("fake state", { type: "FAKE_TYPE" })
      ).toEqual("fake state");
    });
  });

  describe(actions.FETCH_BOARDS_REQUEST, () => {
    it("returns the correct status", () => {
      expect(
        reducer(undefined, { type: actions.FETCH_BOARDS_REQUEST })
      ).toEqual(statuses.FETCHING_BOARDS);
    });
  });

  describe(actions.FETCH_BOARDS_SUCCESS, () => {
    it("returns the correct status", () => {
      expect(
        reducer(undefined, { type: actions.FETCH_BOARDS_SUCCESS })
      ).toEqual(statuses.BOARDS_FETCHED_SUCCESSFULLY);
    });
  });
});
