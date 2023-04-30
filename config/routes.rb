Rails.application.routes.draw do
  resources :tickets
  resources :users
  resources :events
  resources :owners 


  # Store
  get 'store/index', to: 'store#index'
  # get 'store/events/:id', to: 'store#events'
  get 'store/events/:id', to: 'store#get_owner_with_events'

  get 'events/tickets/:id', to: 'events#register_tickets'



end
