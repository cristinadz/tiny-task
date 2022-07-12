class FavoritedActivitiesController < ApplicationController
    
    def create 
        activity = Activity.find_by(id: params[:id])
        favorite = FavoritedActivity.create( activity_id: activity.id, user_id: @current_user.id, completed: false )
        render json: favorite, status: :created
    end

    def index 
        if params[:activity_id]
            a = Activity.find(params[:activity_id])
            category = a.category
        else
            category = FavoritedActivity.all 
        end
        render json: category
    end


end

