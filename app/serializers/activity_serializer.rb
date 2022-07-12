class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description
  has_one :category 
end
