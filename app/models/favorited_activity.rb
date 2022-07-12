class FavoritedActivity < ApplicationRecord
  belongs_to :user
  belongs_to :activity


  validates :user, uniqueness: { scope: :activity_id }
end
