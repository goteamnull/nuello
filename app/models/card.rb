class Card < ApplicationRecord
  has_many :comments
  belongs_to :list

  validates_presence_of :title, allow_blank: false
end