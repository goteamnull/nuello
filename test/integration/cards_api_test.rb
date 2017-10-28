require 'test_helper'

class CardsAPITest < ActionDispatch::IntegrationTest
  class GetCardTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      test "returns a json object" do
        get "/api/cards/1",
          headers: { 'Accept' => 'application/json' }
        assert_match /\{.*\}/, response.body
      end

      test "returns a card json object" do
        card = FactoryGirl.create(:card)

        get "/api/cards/#{card.id}",
          headers: { 'Accept' => 'application/json' }
        assert_includes response.body, card.title
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      test "returns a 404 when given a negative number param" do
        get "/api/cards/-4",
          headers: { 'Accept' => 'application/json' }
        assert_response 404
      end

      test "returns a 404 when given a non-number param" do
        get "/api/cards/whatever",
          headers: { 'Accept' => 'application/json' }
        assert_response 404
      end
    end
  end

  class PostCardsTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      test "creates a new card" do
        list = FactoryGirl.create(:list)
        card = {
          list_id: list.id,
          card: {
            title: 'My new card',
            position: 1.0
          }
        }
        assert_equal 0, Card.count

        post "/api/cards",
          params: card,
          headers: { 'Accept' => 'application/json' }

        assert_equal 1, Card.count
      end

      test "returns a 201" do
        list = FactoryGirl.create(:list)
        card = {
          list_id: list.id,
          card: {
            title: 'My new card',
            position: 1.0
          }
        }

        post "/api/cards",
          params: card,
          headers: { 'Accept' => 'application/json' }

        assert_response 201
      end

      test "returns the new card and timestamps" do
        list = FactoryGirl.create(:list)
        card = {
          list_id: list.id,
          card: {
            title: 'My new card',
            position: 1.0
          }
        }

        post "/api/cards",
          params: card,
          headers: { 'Accept' => 'application/json' }

        assert_includes response.body, Card.first.title
        assert_includes response.body, "created_at"
        assert_includes response.body, "updated_at" 
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      test "returns a 422" do
        card = {
          card: {
            title: 'My new card',
            position: 1.0
          }
        }

        post "/api/cards",
          params: card,
          headers: { 'Accept' => 'application/json' }

        assert_response 422
      end
    end
  end
end
