json.merge! @card.attributes

json.labels []
json.comments_count @card.comments.count
json.actions []
