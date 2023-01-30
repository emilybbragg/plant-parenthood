class Post < ApplicationRecord

  belongs_to :user
  belongs_to :category
  has_many :likes
  # , dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :users, through: :likes

  has_many :users, {:through=>:comments, :source=>"user"}
  # has_many :users, {:through=>:likes, :source=>"user"}

    # has_many :users, through: :comments
    # optional: true

end
