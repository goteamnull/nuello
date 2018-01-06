require 'test_helper'

class ListsAPITest < ActionDispatch::IntegrationTest
  class PostListTest < ActionDispatch::IntegrationTest
    test "creates a new list" do
      board = FactoryGirl.create(:board)
      list = { board_id: board.id, list: { title: "My new list", position: 1.0 } }
      assert_equal 0, List.count

      post "/api/lists",
        params: list,
        headers: { 'Accept' => 'application/json' }

      assert_equal 1, List.count
    end

    test "returns a json object with the new list and timestamps" do
      board = FactoryGirl.create(:board)
      list = { board_id: board.id,  list: { title: "My new list", position: 1.0 } }

      post "/api/lists",
        params: list,
        headers: { 'Accept' => 'application/json' }

      assert_match /\{.*\}/, response.body
      assert_includes response.body, list[:list][:title]
      assert_includes response.body, "created_at"
      assert_includes response.body, "updated_at" 
    end

    test "returns a 201 status when successfully created" do
      board = FactoryGirl.create(:board)
      list = { board_id: board.id,  list: { title: "My new list", position: 1.0 } }

      post "/api/lists",
        params: list,
        headers: { 'Accept' => 'application/json' }

      assert_equal response.status, 201
    end

    test "returns a 404 status and error if board id is invalid" do
      list = { board_id: 1,  list: { title: "My new list" } }

      post "/api/lists",
        params: list,
        headers: { 'Accept' => 'application/json' }

      assert_includes response.body, "invalid board id"
      assert_equal response.status, 404
    end

    test "returns a 422 status and error if title is missing" do
      board = FactoryGirl.create(:board)
      list = { board_id: board.id,  list: { field: "not title"} }

      post "/api/lists",
        params: list,
        headers: { 'Accept' => 'application/json' }

      assert_includes response.body, "cannot process list without title"
      assert_equal response.status, 422
    end

    test "returns a 422 status and error if params invalid" do
      board = FactoryGirl.create(:board)
      list = { board_id: board.id,  list: {} }

      post "/api/lists",
        params: list,
        headers: { 'Accept' => 'application/json' }

      assert_includes response.body, "invalid list data provided"
      assert_equal response.status, 422
    end
  end

  class UpdateListTest < ActionDispatch::IntegrationTest
    test 'returns a json object with the updated title and position' do
      list = FactoryGirl.create(:list)
      update = { "title" => "Updated title", "position" => 132819 }

      put "/api/lists/#{list.id}",
        params: update,
        headers: { 'Accept' => 'application/json'}
      
      assert_match /\{.*\}/, response.body
      assert_includes response.body, update["title"]
      assert_includes response.body, update["position"].to_s
      assert_includes response.body, list.board_id.to_s
    end

    test 'returns a 200 status code when successfully updated' do
      list = FactoryGirl.create(:list)
      update = { "title" => "Updated title", "position" => 132819 }

      put "/api/lists/#{list.id}",
        params: update,
        headers: { 'Accept' => 'application/json'}
      
      assert_equal response.status, 200
    end

    test 'if only title is provided, only updates title' do
      list = FactoryGirl.create(:list)
      update = { "title" => "Updated title" }

      put "/api/lists/#{list.id}",
        params: update,
        headers: { 'Accept' => 'application/json'}
      
      assert_includes response.body, update["title"]
      assert_includes response.body, list.position.to_s
    end

    test 'if only position is provided, only updates position' do
      list = FactoryGirl.create(:list)
      update = { "position" => 132819 }

      put "/api/lists/#{list.id}",
        params: update,
        headers: { 'Accept' => 'application/json'}
      
      assert_includes response.body, update["position"].to_s
      assert_includes response.body, list.title
    end

    test 'return 404 status and error if list does not exist' do
      update = { "title" => "Updated title", "position" => 132819 }

      put "/api/lists/5000",
        params: update,
        headers: { 'Accept' => 'application/json'}
      
      assert_equal response.status, 404
      assert_includes response.body, "Invalid list id provided"
    end

    test 'return 422 status and error if no title or position provided' do
      list = FactoryGirl.create(:list)
      update = {}

      put "/api/lists/#{list.id}",
        params: update,
        headers: { 'Accept' => 'application/json'}
      
      assert_equal response.status, 422
      assert_includes response.body, "require title or position"
    end
  end
end
