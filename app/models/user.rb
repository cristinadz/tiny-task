class User < ApplicationRecord
    has_secure_password
    has_many :favorited_activities
    has_many :activities, through: :favorited_activities
    
    validates :username, presence: true, uniqueness: true
end
