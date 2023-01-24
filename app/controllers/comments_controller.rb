class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments
  end

  def create
    post = @current_user?.comments?.create!(comment_params)
    render json: comment, status: :created
  end

  private

  def comment_params
    params.permit(:description, :user_id, :post_id)
  end


end
