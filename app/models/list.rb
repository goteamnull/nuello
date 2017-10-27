class List < ApplicationRecord
  belongs_to :board
  has_many :cards

  validates_presence_of :title, allow_blank: false
  validates_presence_of :position
end
