class PostsController < ApplicationController

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      posts = user.posts
      render json: posts
    else 
      posts = Post.all
      render json: posts
    end
  end

  # def index
  #   posts = Post.all
  #   render json: posts
  # end

  def show
    post = Post.find(params[:id])
    render json: post
    # , include: :comments
  end

  def create
    post = @current_user.posts.create!(post_params)
    render json: post, status: :created
  end

  def update
    # post = @current_user.posts.find(params[:id])
    post = Post.find(params[:id])
    post.update!(post_params)
    render json: post
  end

  def destroy
    # post = @current_user.posts.find(params[:id])
    post = Post.find(params[:id])
    post.destroy
    head :no_content
  end

  private

  def post_params
    params.permit(:image, :caption, :user_id, :category_id)
  end

end
