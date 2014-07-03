class NpiStatusesController < ApplicationController

  def index
  	@npiStatuses = NpiStatus.all
  end

  def new
  	@npiStatus = NpiStatus.new
  end

  def create
    @npiStatus = NpiStatus.new(npi_status_params)
    if @npiStatus.save
      #sign_in @user - removed so new user isn't logged in
      flash[:success] = "MPI Status Created: " + @npiStatus.name
      redirect_to npi_statuses_url
    else
      render 'new'
    end
  end

  def edit
    @npiStatus = NpiStatus.find(params[:id])
  end

  def update
    @npiStatus = NpiStatus.find(params[:id])
    if @cnpiStatus.update_attributes(npi_status_params)
      flash[:success] = @npiStatus.name + " updated"
      redirect_to npi_statuses_url
    else
      render 'edit'
    end
  end

  def destroy
    @npiStatus = NpiStatus.find(params[:id])
    NpiStatus.find(params[:id]).destroy
    flash[:success] = @npiStatus.name + " has been deleted."
    redirect_to npi_statuses_url
  end 

private

    def npi_status_params
      # might need to remove :role_id from this - see section 9.4.2
      # "Revisiting strong parameters"
      params.require(:npi_status).permit(:name)
    end

end

