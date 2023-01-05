class PostsController < ApplicationController

  def index
    posts = Post.all
    render json: posts
  end

  # def user_posts
  #   user = User.find_by(id: session[:user_id])
  #   posts = user.posts
  #   render json: posts
  # end

  # def show
  #   post = Post.find(params[:id])
  #   render json: album
  # end

  def create
    post = Post.create!(post_params)
    render json: post, status: :created
  end

  private

  def post_params
    params.permit(:image, :description)
  end

end
