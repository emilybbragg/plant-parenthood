# class S3UploadsController < ApplicationController

# #   def set_s3_direct_post
# #     filename = params[:filename]
# #     file_type = params[:fileType]
# #     directory = params[:directory]
# #     random_path = SecureRandom.uuid
# #     key = "uploads/#{directory}/#{random_path}/#{filename}"
    
# #     signer = Aws::S3::Presigner.new
# #     post_url = signer.presigned_url(:put_object, bucket: "plant-parenthoodapi", key: key, acl: 'public-read', content_type: file_type)
# #     get_url = "https://plant-parenthoodapi.s3-us-east-2.amazonaws.com/#{key}"
# #     json_response(
# #       {
# #         post_url: post_url,
# #         get_url: get_url,
# #       }
# #     )
# #   end

#   def direct_post
#     data = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
#     render json: { url: data.url, fields: data.fields }, status: :ok
#   end

# end