class FavoritedActivityCategorySerializer < ActiveModel::Serializer
attributes :id, :name, :image, :description
has_many :categories

end
