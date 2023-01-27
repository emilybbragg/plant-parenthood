Rails.application.routes.draw do
    # resources :categories
  resources :comments
  resources :posts
  resources :users
  


  # resources :categories, only: [:show, :index] do
  #   resources :posts, only: [:index, :create, :show]
  # end

  resources :categories do
    resources :posts
  end

  resources :users, only: [:show, :patch] do
    resources :posts, only: [:index]
  end

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


  # resources :posts, only: [:update, :destroy, :create, :index]
  # resources :users
  # get "/users/:user_id/posts", to: 'posts#reviewed_posts'
  # post "/posts/newpost", to: 'posts#create'