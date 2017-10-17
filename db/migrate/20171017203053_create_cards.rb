class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title
      t.text :description
      t.datetime :due_date
      t.boolean :archived
      t.float :position
      t.integer :list_id
      t.timestamps
    end
  end
end
