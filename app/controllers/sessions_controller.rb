class SessionsController < ApplicationController
    
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user.id] = user.id
            render json: user, status: :created
        else
            render json: {error: "Invalid"}, status: :unprocessable_entity
        end
    end


def destroy
    session.destroy
    head :no_content
end


end