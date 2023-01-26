class CategoriesController < ApplicationController

  def index
    categories = Category.all
    render json: categories
  end


  # def show
  #   categories = Categories.all.order(name: :asc)
  #   render json: categories
  # end


end
