class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :name

  has_many :posts
  has_many :categories, through: :posts
  # has_many :comments
end
