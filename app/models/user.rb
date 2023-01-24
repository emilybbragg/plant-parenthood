class User < ApplicationRecord

  has_secure_password

  has_many :posts
  has_many :categories, through: :posts
  has_many :comments

  validates :username, presence: true, uniqueness: true
  validates :name, presence: true

end
