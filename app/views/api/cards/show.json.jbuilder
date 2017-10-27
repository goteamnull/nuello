json.merge! @card.attributes

json.comments do
  json.array! @card.comments do |comment|
    json.merge! comment.attributes
  end
end

json.comments_count @card.comments.count
