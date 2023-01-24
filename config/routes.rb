Rails.application.routes.draw do
  
  resources :comments
  resources :categories
  resources :posts
  resources :users

  # get "/users/:user_id/posts", to: 'posts#reviewed_posts'

  post "/posts/newpost", to: 'posts#create'



  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
