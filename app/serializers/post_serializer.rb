class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :caption
  # , :user_id
  belongs_to :user
  belongs_to :category
end