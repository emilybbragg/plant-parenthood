class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :caption, :user_id, :category_id

  belongs_to :user
  belongs_to :category
  has_many :comments
  has_many :users, through: :comments

end