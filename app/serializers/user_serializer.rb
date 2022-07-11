class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest
  has_many :favorited_activities
end
