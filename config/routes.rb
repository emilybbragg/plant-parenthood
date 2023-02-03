Rails.application.routes.draw do
  # get 's3/direct_post'
  # resources: s3_uploads
  default_url_options Rails.application.config.action_mailer.default_url_options
  
  resources :likes
  resources :comments
  resources :posts
  resources :users
  resources :categories

  resources :users do
    resources :comments
  end

  resources :users do
    resources :posts
  end

  resources :posts do
    resources :comments, only: [:show, :index, :create]
  end

  resources :categories do
    resources :posts
  end

  resources :users do
    resources :likes
  end

  resources :posts do
    resources :likes
  end

  # resources :users, only: [:show, :update] do
  #   resources :comments, only: [:index, :show, :destroy]
  # end
  
  # resources :users, only: [:show, :update] do
  #   resources :posts, only: [:index, :update, :show, :destroy]
  # end

  # resources :posts, only: [:show, :update] do
  #   resources :comments, only: [:index, :show, :destroy]
  # end

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end