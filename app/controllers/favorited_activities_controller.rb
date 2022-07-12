class FavoritedActivitiesController < ApplicationController
    
    def create 
        activity = Activity.find_by(id: params[:id])
        favorite = FavoritedActivity.create( activity_id: activity.id, user_id: @current_user.id, completed: false )
        render json: favorite, status: :created
    end

    def index 
        render json: @current_user.favorited_activities, include: 'activity.category'
    end

    def update
        
    end

    def destroy
        find_fav_activity.destroy
        head :no_content
    end

    private
    def find_fav_activity
        FavoritedActivity.find(params[:id])
    end

end

