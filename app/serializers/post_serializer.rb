class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :caption, :user_id, :category_id, :image

  belongs_to :user
  belongs_to :category
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :users, through: :likes
  has_many :users, {:through=>:comments, :source=>"user"}

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end



# def image
#   # return unless object.image.attached?
#   object.image.blob.attributes
#         .slice('filename', 'byte_size')
#         .merge(url: image_url)
#         .tap { |attrs| attrs['name'] = attrs.delete('filename') }
# end

# def image_url
#   url_for(object.image)
# end



# include Rails.application.routes.url_helpers
# throws undefined method image error
  # def image
  #   if object.image.attached?
  #     {
  #       url: rails_blob_url(object.image)
  #     }
  #   end
  # end


  # has_many :users, {:through=>:likes, :source=>"user"}

end