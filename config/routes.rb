Rails.application.routes.draw do
  
  # actionCable server 
  mount ActionCable.server => "/cable"

  resources :stores
  resources :tickets
  resources :users
  resources :events
  resources :owners 


  # STORE EXTRA RESOURCES

  # get 'store/index', to: 'store#index'
  # # get 'store/events/:id', to: 'store#events'
  get 'stores/events/:id', to: 'stores#get_owner_with_events'
  # get 'store/server', to: 'store#server'

  # EVENTS
  get 'events/tickets/:id', to: 'events#register_tickets'






end
