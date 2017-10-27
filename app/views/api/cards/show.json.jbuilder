json.merge! @card.attributes

json.comments do
  json.array! @card.comments do |comment|
    json.merge! comment.attributes
  end
end

json.labels []
json.actions []
json.comments_count @card.comments.count
