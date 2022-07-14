class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :profile_img
  has_many :favorited_activities
end
