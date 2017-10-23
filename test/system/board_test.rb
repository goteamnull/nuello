require "application_system_test_case"

class BoardTest < ApplicationSystemTestCase
  setup do
    create(:board, id: 1, title: "team null");

    create(:list, id: 1, board_id: 1, title: "my todos");
    create(:list, id: 2, board_id: 1, title: "my completed");

    create(:card, id: 1, list_id: 1, title: "coffee");
    create(:card, id: 2, list_id: 1, title: "nails");

    create(:card, id: 3, list_id: 2, title: "apples");
    create(:card, id: 4, list_id: 2, title: "jbuilder");
    create(:card, id: 5, list_id: 2, title: "javascript");
  end

  test "displaying board title, list titles, and card titles" do
    visit root_path

    find(".board-title", text: "team null").click

    assert_selector "#title", text: "team null"
    assert_selector ".list-title", text: "my todos"
    assert_selector ".list-title", text: "my completed"
    assert_selector "p", text: "coffee"
    assert_selector "p", text: "nails"
    assert_selector "p", text: "apples"
    assert_selector "p", text: "jbuilder"
    assert_selector "p", text: "javascript"
  end
end
