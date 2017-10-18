class Comment < ApplicationRecord
  belongs_to :card

  validates_presence_of :body, allow_blank: false
end
