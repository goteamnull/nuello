class Board < ApplicationRecord
  has_many :lists
  has_many :cards

  validates_presence_of :title, allow_blank: false
end
