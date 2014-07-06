class CarriersController < ApplicationController

  def index
    @carriers = Carrier.all
  end

  def show
	@carrier = Carrier.find(params[:id])
  end

  def new
  	@carrier = Carrier.new
  end

  def create
    @carrier = Carrier.new(carrier_params)
    if @carrier.save
      #sign_in @user - removed so new user isn't logged in
      flash[:success] = "Carrier Created: " + @carrier.name
      redirect_to carriers_url
    else
      render 'new'
    end
  end

  def edit
    @carrier = Carrier.find(params[:id])
  end

  def update
    @carrier = Carrier.find(params[:id])
    if @carrier.update_attributes(carrier_params)
      flash[:success] = @carrier.name + " updated"
      redirect_to carriers_url
    else
      render 'edit'
    end
  end

  def destroy
    @carrier = Carrier.find(params[:id])
    Carrier.find(params[:id]).destroy
    flash[:success] = @carrier.name + " has been deleted."
    redirect_to carriers_url
  end 

private

    def carrier_params
      # might need to remove :role_id from this - see section 9.4.2
      # "Revisiting strong parameters"
      params.require(:carrier).permit(:name)
    end

end
