class User < ApplicationRecord

  has_secure_password

  has_many :posts
  has_many :comments
  has_many :posts, through: :comments
  has_many :categories, through: :posts

  validates :username, presence: true, uniqueness: true
  validates :name, presence: true

end
