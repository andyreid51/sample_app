class UsersController < ApplicationController
  before_action :signed_in_user, only: [:index, :edit, :update, :destroy]
  before_action :correct_user,   only: [:edit, :update]
  before_action :admin_user,     only: [:destroy, :index, :new]

  def index
    @users = User.all
  end

	def show
		@user = User.find(params[:id])
	end	

  def new
  	@user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      #sign_in @user - removed so new user isn't logged in
      flash[:success] = "User Created: " + @user.name
      redirect_to users_url
    else
      render 'new'
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      flash[:success] = @user.name + " updated"
      redirect_to @user
    else
      render 'edit'
    end
  end

  def destroy
    @user = User.find(params[:id])
    User.find(params[:id]).destroy
    flash[:success] = @user.name + " has been deleted."
    redirect_to users_url
  end  

  private

    def user_params
      # might need to remove :role_id from this - see section 9.4.2
      # "Revisiting strong parameters"
      params.require(:user).permit(:name, :email, :job_title, :role_id, :password,
                                   :password_confirmation)
    end

     # Before filters

    def signed_in_user
      unless signed_in?
        flash[:warning] = "Please sign in."
        redirect_to signin_url
      end
    end

    def correct_user
      @user = User.find(params[:id])
      # If a user attempts to access another user redirect them to
      # their profile unless they are an admin
      redirect_to current_user unless current_user?(@user)  || admin_user?
    end

    def admin_user
      redirect_to current_user unless admin_user?
    end
end
