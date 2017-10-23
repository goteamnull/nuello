json.merge! @board.attributes

json.lists do 
  json.array! @board.lists do |list|
    json.merge! list.attributes
    json.cards do
      json.array! list.cards do |card|
        json.merge! card.attributes
        json.comments_count card.comments.count
      end
    end
  end
end

