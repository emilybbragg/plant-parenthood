class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :caption, :user_id
end