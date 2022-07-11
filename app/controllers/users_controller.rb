class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, include: :category
    end

private

def user_params
    params.permit(:username, :password, :password_confirmation, :email)
end

end