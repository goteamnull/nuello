Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    resources :boards, only: [:index, :create, :show]
    resources :lists, only: [:create, :update]
  end

  get '/ui/all_boards', to: 'ui#all_boards'
  get '/ui/single_board', to: 'ui#single_board'
  get '/ui/create_board', to: 'ui#create_board'
  get '/ui/card', to: 'ui#card'
  get '/ui/card_editing_description', to: 'ui#card_editing_description'
  get '/ui/card_archived', to: 'ui#card_archived'
  get '/ui/due_date_popover', to: 'ui#due_date_popover'
  get '/ui/labels_popover', to: 'ui#labels_popover'
  get '/ui/move_card_popover', to: 'ui#move_card_popover'
  get '/ui/copy_card_popover', to: 'ui#copy_card_popover'
  get '/ui', to: 'ui#index'
end
