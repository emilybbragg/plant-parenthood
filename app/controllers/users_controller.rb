class UsersController < ApplicationController

  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  def update
    user = User.find_by(id: session[:user_id])
    user.update!(update_params)
    render json: user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :name)
  end

  def update_params
    params.permit(:bio)
  end
  
end
