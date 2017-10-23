# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

board = Board.create(title: 'team null')

list_1 = board.lists.create(title: 'todos')
list_2 = board.lists.create(title: 'completed')

# List 1 cards
card_1 = list_1.cards.create(title: 'coffee')
card_2 = list_1.cards.create(title: 'nails')

# List 2 cards
card_3 = list_2.cards.create(title: 'apples')
card_4 = list_2.cards.create(title: 'jbuilder')
card_5 = list_2.cards.create(title: 'javascript')

# Sample comment
comment_1 = card_5.comments.create(body: 'postman')


# {
#   "id": 1,
#   "title": "Web dev",
#   "created_at": "2017-10-04T05:57:02.777Z",
#   "updated_at": "2017-10-04T05:57:02.777Z",
#   "lists": [
#     {
#       "id": 3,
#       "title": "CSS",
#       "board_id": 1,
#       "created_at": "2017-10-04T06:53:39.302Z",
#       "updated_at": "2017-10-04T06:53:39.302Z",
#       "position": 65535.0,
#       "cards": [
#         {
#           "id": 7,
#           "title": "1",
#           "due_date": null,
#           "labels": [
#             "red",
#             "purple"
#           ],
#           "description": "Selectors",
#           "list_id": 3,
#           "board_id": 1,
#           "position": 65535.0,
#           "comments_count": 0
#         }
#       ]
#     }
#   ]
# }
# ```