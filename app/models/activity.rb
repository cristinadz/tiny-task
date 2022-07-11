class Activity < ApplicationRecord
  belongs_to :category
  has_many :favorited_activities
  has_many :users, through: :favorited_activities
end
