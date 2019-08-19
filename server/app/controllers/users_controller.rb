class UsersController < ApplicationController
before_action :set_user, only: %i[show update destroy]
before_action :authorize_request, except: :create


  def index
    @users = User.all
    render json: @users, include: :presets, status: :ok
  end
  
  def show
    @user = User.find(params[:id]) 
    render json: @user, include: :presets, status: :ok

  end
  
  
  
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user,status: :created, location: @user
    else
      render json: {errors: @user.errors }, status: :unprocessable_entity
     end
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user, status: :ok
    else
      render json: {errors: @user.errors}, status: :unprocessable_entity
    end
  end
  
  def destroy
    @user = User.find(params[:id])
    if @user.destroy
    render json: @user
    head 204
    end
  end
  
  def verify
    @user = {
      id: @current_user[:id],
      name: @current_user[:name],
      email: @current_user[:email]
    }
    render json: @user
  end
  

  

  private


  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
 


end

