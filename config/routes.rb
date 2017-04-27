Rails.application.routes.draw do
	
	root 'welcome#index'

  get 'welcome' => 'welcome#index'

  get 'category' => 'locations#category'

  get 'profile' => 'welcome#show_user'
  

  resources :locations, :users
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

 
end
