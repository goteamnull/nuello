class List < ApplicationRecord
  belongs_to :board
  has_many :cards

  validates_presence_of :title, allow_blank: false
  validates_presence_of :position

  def self.updatableAttributes
    [
      :title,
      :list_id,
      :position,
      :description,
      :archived,
      :due_date,
      :completed
    ]
  end
end
