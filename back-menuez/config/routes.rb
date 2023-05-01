Rails.application.routes.draw do
  
  # actionCable server 
  mount ActionCable.server => "/cable"

  resources :stores
  resources :tickets
  resources :users
  resources :events
  resources :owners 


  # OWNER EXTRA RESOURCES
  get 'owners/tickets/:id', to: 'owners#owners_inform'

  # USER EXTRA RESOURCES
  get 'users/tickets/:id', to: 'users#users_inform'

  # EVENTS EXTRA RESOURCES
  get 'events/tickets/:id', to: 'events#events_inform'

  # TICKETS EXTRA RESOURCES
  get 'tickets/category/:type', to: 'tickets#ticktes_category'


  # STORE EXTRA RESOURCES
  get 'stores/events/:id', to: 'stores#get_owner_with_events'
  # get 'store/server', to: 'store#server'
  # get 'store/index', to: 'store#index'
  # get 'store/events/:id', to: 'store#events'



end
