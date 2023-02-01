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
    if already_liked?
      "you cant like this more than once"
    else
    # like = Like.create!(like_params)
    like = @current_user.likes.create!(like_params)
    render json: like, status: :created
    end
  end


  # def destroy
  #   if params[:post_id]
  #     post = Post.find(params[:post_id])
  #     likes = post.likes
  #     render json: likes
  #   # like = Like.find(params[:id])
  #   like.destroy
  #   head :no_content
  # end  


  private

  def like_params
    params.permit(:user_id, :post_id)
  end

  def already_liked?
    Like.where(user_id: @current_user.id, post_id:
    params[:post_id]).exists?    
  end

end
