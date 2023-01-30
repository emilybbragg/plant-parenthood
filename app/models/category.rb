class Category < ApplicationRecord

  has_many :posts
  has_many :users, {:through=>:posts, :source=>"user"}

  # has_many :users, through: :posts
  
end
