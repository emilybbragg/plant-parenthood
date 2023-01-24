class PostsController < ApplicationController

def index
  posts = Post.all
  render json: posts
end

  # def index
  #   if params[:user_id]
  #     user = User.find(params[:user_id])
  #     posts = user.posts
  #     render json: posts
  #   else 
  #     posts = Post.all
  #     render json: posts
  #   end
  # end

  # def user_posts
  #   user = User.find_by(id: session[:user_id])
  #   posts = user.posts
  #   render json: posts
  # end


  # def index
  #   if params[:user_id]
  #     post = Post.find(params[:user_id])
  #     posts = user.posts
  #     render json: posts
  #   else
  #     posts = Post.all
  #     render json: posts
  #   end
  # end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  # def create
  #   post = @current_user.posts.create!(post_params)
  #   render json: post, status: :created
  # end

  def create
    post = Post.create(post_params)
    render json: post, status: :created
  end

  private

  def post_params
    params.permit(:image, :caption, :user_id)
  end
  #, :category_id

end
