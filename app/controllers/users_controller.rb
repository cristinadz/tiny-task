class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, include: :category
    end

    def update 
        @current_user.update!(user_params)
        render json: @current_user, status: :accepted
    end

private

def user_params
    params.permit(:username, :password, :password_confirmation, :profile_img, :email)
end

end
