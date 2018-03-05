class Card < ApplicationRecord
  has_many :comments
  belongs_to :board
  belongs_to :list

  validates_presence_of :title, allow_blank: false
  validates_presence_of :position

  def self.updatableAttributes
    [
      :title,
      :list_id,
      :position,
      :description,
      :archived,
      :due_date
    ]
  end
end
