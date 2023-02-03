class PostsController < ApplicationController

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      posts = user.posts
      render json: posts
    else 
      posts = Post.all.with_attached_image
      render json: posts
    end
  end

  def show
    # post = Post.find(params[:id])
    post = find_post
    # image = rails_blob_path(post.image)
    render json: post
    # render json: {post: post, image: image}
    # render json: {post: post, image_url: image(post)}
  end

  def create
    post = @current_user.posts.create!(post_params)
    render json: post
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
    params.permit(:caption, :user_id, :category_id, :image)
  end

   def find_post
      Post.find(params[:id])
  end

end
