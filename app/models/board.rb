class Board < ApplicationRecord
  has_many :lists
  validates_presence_of :title, allow_blank: false
end
