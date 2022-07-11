class FavoritedActivitySerializer < ActiveModel::Serializer
  attributes :id, :completed
  has_one :user
  has_one :activity
end
