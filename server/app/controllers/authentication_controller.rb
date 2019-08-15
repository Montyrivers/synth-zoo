class AuthenticationController < ApplicationController

def login
  @user = User.find_by_name(params[:name])
  if @user.authenticate(params[:password])
    token = encode(id: @user.id, username: @user.name)
    render json: {token: token, user: {id: @user.id, username: @user.name}}, status: :ok
  else
    render json: { error: 'unauthorized'}, status: :unauthorized
  end
end

private

  def login_params
    params.permit(:name, :password)
  end
end
