class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :caption, :user_id, :category_id

  belongs_to :user
  belongs_to :category
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :users, through: :likes

  has_many :users, {:through=>:comments, :source=>"user"}
  # has_many :users, {:through=>:likes, :source=>"user"}
  # has_many :users, through: :comments

end