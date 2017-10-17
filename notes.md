Board
  has many lists

List
  belongs to a board
  has many cards

  id
  title
  position
  timestamps

  board_id

Card
  belongs to a list
  has many labels thru?
  has many comments

  id
  title
  description
  labels
  due_date
  archived boolean
  timestamps
  position

  list_id

Comment
  belongs to a card

  id
  text
  timestamps

  card_id

Label?
  has many cards thru