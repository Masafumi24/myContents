Rails.application.routes.draw do
  root to: "feelings#index"
  resources :feelings, only: [:index, :create, :show]
end
