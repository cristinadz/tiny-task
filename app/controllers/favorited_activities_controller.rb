class FavoritedActivitiesController < ApplicationController
    
    def create 
        activity = Activity.find_by(id: params[:id])
        favorite = FavoritedActivity.create( activity_id: activity.id, user_id: @current_user.id, completed: false )
        render json: favorite, status: :created
    end

end

