class Post < ApplicationRecord

  belongs_to :user
  belongs_to :category
  
  has_many :comments
  # optional: true
  has_many :users, through: :comments

end
