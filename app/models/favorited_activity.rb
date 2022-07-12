class FavoritedActivity < ApplicationRecord
  belongs_to :user
  belongs_to :activity
  has_many :categories


  validates :user, uniqueness: { scope: :activity_id }
end
