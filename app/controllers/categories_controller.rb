class CategoriesController < ApplicationController

  def index
    categories = Category.all
    render json: categories
  end


  def show
    category = Category.find_by(id: params[:category_id])
    render json: user
  end


end
