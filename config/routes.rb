Rails.application.routes.draw do
  resources :producers
  resources :locations
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'locations#index'
end
