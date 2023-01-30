class User < ApplicationRecord

  has_secure_password

  has_many :posts
  has_many :comments
  has_many :likes
  has_many :posts, {:through=>:comments, :source=>"post"}
  has_many :posts, through: :likes

  has_many :categories, {:through=>:posts, :source=>"category"}
  # has_many :likes, {:through=>:posts, :source=>"like"}


    # has_many :posts, through: :comments
  # has_many :categories, through: :posts
  # accepts_nested_attributes_for :profile, update_only: true, allow_destroy: true

  validates :username, presence: true, uniqueness: true
  validates :name, presence: true

end
