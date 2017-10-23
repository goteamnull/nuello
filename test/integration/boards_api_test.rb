require 'test_helper'

class BoardsAPITest < ActionDispatch::IntegrationTest
  class GetBoardsTest < ActionDispatch::IntegrationTest
    test "returns a json array" do
      get "/api/boards",
        headers: { 'Accept' => 'application/json' }
      assert_match /\[.*\]/, response.body
    end
  end

  class GetBoardTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      test "returns a json object" do
        get "/api/boards/1",
          headers: { 'Accept' => 'application/json' }
        assert_match /\{.*\}/, response.body
      end

      test "returns a board json object" do
        board = FactoryGirl.create(:board)

        get "/api/boards/#{board.id}",
          headers: { 'Accept' => 'application/json' }
        assert_includes response.body, board.title
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      test "returns a 404 when given a negative number param" do
        get "/api/boards/-4",
          headers: { 'Accept' => 'application/json' }
        assert_response 404
      end

      test "returns a 404 when given a non-number param" do
        get "/api/boards/whatever",
          headers: { 'Accept' => 'application/json' }
        assert_response 404
      end
    end
  end

  class PostBoardsTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      test "creates a new board" do
        assert_equal 0, Board.count

        post "/api/boards",
          params: { board: { title: "My new board" } },
          headers: { 'Accept' => 'application/json' }

        assert_equal 1, Board.count
      end

      test "returns a 201" do
        post "/api/boards",
          params: { board: { title: "My new board" } },
          headers: { 'Accept' => 'application/json' }


        assert_response 201
      end


      test "returns the new board" do
        new_board = { title: "My new board" }

        post "/api/boards",
          params: { board: new_board },
          headers: { 'Accept' => 'application/json' }

        assert_equal Board.first.to_json, response.body
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      test "returns a 422" do
        post "/api/boards",
          params: { board: { title: '' } },
          headers: { 'Accept' => 'application/json' }

        assert_response 422
      end
    end
  end
end
