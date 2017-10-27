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
end
