class ActCatSerializer < ActiveModel::Serializer
    attributes :id, :name, :image, :description
    has_many :category 
  end