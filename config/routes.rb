Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/users" => "gamblers#index"

  root to: "gamblers#index"

  resources :clients
  resources :wagers


end
