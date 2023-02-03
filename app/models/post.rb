class Post < ApplicationRecord
  # include ActiveModel::Serializers::JSON
  has_one_attached :image

  belongs_to :user
  belongs_to :category
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :users, through: :likes

  has_many :users, {:through=>:comments, :source=>"user"}

  # def image_url
  #   Rails.application.routes.url_helpers.rails_representation_url(
  #     selected_image.variant(resize_to_limit: [200, 200]).processed, only_path: true
  #   )
  # end

  # def image_url
  #   Rails.application.routes.url_helpers.url_for(image) if image.attached?
  # end

  # has_many :users, {:through=>:likes, :source=>"user"}
  # has_many :users, through: :comments

end
