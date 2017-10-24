import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises';

import client from './ApiClient';
import * as routes from '../constants/ApiRoutes';


describe("ApiClient", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("getBoards", () => {
    const boards = [{
      id: 1,
      title: "My board"
    }];

    describe("successful request", () => {
      it("calls the callback with the boards", async () => {
        const cb = jest.fn();

        mock.onGet(routes.BOARDS_INDEX_URL).reply(200, boards);
        client.getBoards(cb);

        await flushPromises();

        expect(cb).toHaveBeenCalledWith(boards);
      });
    });

    describe("failed request", () => {
      const originalError = global.console.error;
      const errorText = "You don't have access to that";

      beforeEach(() => {
        global.console.error = jest.fn();
        mock.onGet(routes.BOARDS_INDEX_URL).reply(401, { error: errorText });
      });

      afterEach(() => {
        global.console.error = originalError;
      });

      it("logs the error", async () => {
        client.getBoards((boards) => {});

        await flushPromises();

        expect(global.console.error).toHaveBeenCalledWith(`HTTP Error: ${errorText}`);
      });

      it("doesn't call the callback", async () => {
        const cb = jest.fn();
        client.getBoards(cb);

        await flushPromises();

        expect(cb).not.toHaveBeenCalled();
      });
    });
  });

  describe("getBoard", () => {
    const board = {
      id: 1,
      title: "sweet board",
    };

    describe("successful request", () => {
      it("calls the callback with the board", async () => {
        const cb = jest.fn();

        mock.onGet(routes.BOARD_URL + board.id).reply(200, board);
        client.getBoard(board.id, cb);

        await flushPromises();

        expect(cb).toHaveBeenCalledWith(board);
      });
    });

    describe("failed request", () => {
      const originalError = global.console.error;
      const errorText = "Invalid board id provided"

      beforeEach(() => {
        global.console.error = jest.fn();
        mock.onGet(routes.BOARD_URL + board.id).reply(404, { error: errorText });
      });

      afterEach(() => {
        global.console.error = originalError;
      });

      it("logs the error", async () => {
        client.getBoard(board.id, (board) => {});

        await flushPromises();

        expect(global.console.error).toHaveBeenCalledWith(`HTTP Error: ${errorText}`);
      });

      it("doesn't call the callback", async () => {
        const cb = jest.fn();
        client.getBoard(board.id, cb);

        await flushPromises();

        expect(cb).not.toHaveBeenCalled();
      });
    });
  });

  describe("createBoard", () => {
    describe("successful request", () => {
      const newBoard = {
        title: "My new board"
      };

      it("calls the callback with the new board", async () => {
        const cb = jest.fn();

        mock.onPost(routes.CREATE_BOARD_URL).reply(201, { ...newBoard, id: 37 });
        client.createBoard(newBoard, cb);

        await flushPromises();

        expect(cb).toHaveBeenCalledWith({ ...newBoard, id: 37 })
      });
    });

    describe("failed request", () => {
      const originalError = global.console.error;
      const errorText = "That is not a valid record";

      beforeEach(() => {
        global.console.error = jest.fn();
        mock.onPost(routes.CREATE_BOARD_URL).reply(422, { error: errorText });
      });

      afterEach(() => {
        global.console.error = originalError;
      });

      it("logs the error", async () => {
        client.createBoard({});

        await flushPromises();

        expect(global.console.error).toHaveBeenCalledWith(`HTTP Error: ${errorText}`);
      });

      it("doesn't call the callback", async () => {
        const cb = jest.fn();

        client.createBoard({}, cb);

        await flushPromises();

        expect(cb).not.toHaveBeenCalled();
      });
    });
  });

  describe("updateList", () => {
    const listId = 1;
    const update = {
      title: "A new list title",
    };

    const list = {
      id: 1,
      title: "A new list title",
    };

    describe("successful request", () => {
      it("calls the callback with the list", async () => {
        const cb = jest.fn();

        mock.onPut(
          routes.UPDATE_LIST_URL + listId
        ).reply(
          200, list
        );
        client.updateList(listId, update, cb);

        await flushPromises();

        expect(cb).toHaveBeenCalledWith(list);
      });
    });

    describe("failed request", () => {
      const originalError = global.console.error;
      const errorText = "Walid's 422 error code";

      beforeEach(() => {
        global.console.error = jest.fn();

        mock.onPut(
          routes.UPDATE_LIST_URL + listId
        ).reply(422, { error: errorText } )
      });

      afterEach(() => {
        global.console.error = originalError
      });

      it("logs the error", async () => {
        client.updateList(listId, update, list => {});

        await flushPromises();

        expect(
          global.console.error
        ).toHaveBeenCalledWith(
          `HTTP Error: ${errorText}`
        );
      });

      it("doesn't call the callback", async () => {
        const cb = jest.fn();
        client.updateList(listId, update, cb);

        await flushPromises();

        expect(cb).not.toHaveBeenCalled();
      });
    });
  });
});
