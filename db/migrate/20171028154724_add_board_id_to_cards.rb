class AddBoardIdToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :board_id, :integer
  end
end
