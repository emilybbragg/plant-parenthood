class LikesController < ApplicationController

  def index
    if params[:post_id]
      post = Post.find(params[:post_id])
      likes = post.likes
      render json: likes
    else 
      likes = Likes.all
      render json: likes
    end
  end

  def create
    like = Like.create!(like_params)
    render json: like, status: :created
  end


  def destroy
    like = Like.find(params[:id])
    like.destroy
    head :no_content
  end  

end
