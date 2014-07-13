class ContainersController < ApplicationController

  def index
    @containers = Container.all
  end

  def new
  	@container = Container.new
  end
  
  def create
	@container = Container.new(container_params)
	if @container.save
      #sign_in @user - removed so new user isn't logged in
      flash[:success] = "Container log Created: " + @container.container_number
      redirect_to containers_url
    else
      render 'new'
    end
  end

  def edit
    @container = Container.find(params[:id])
  end

  def update
    @container = Container.find(params[:id])
    if @container.update_attributes(container_params)
      flash[:success] = @container.container_number + " updated"
      redirect_to containers_url
    else
      render 'edit'
    end
  end

  def destroy
    @container = Container.find(params[:id])
    Container.find(params[:id]).destroy
    flash[:warning] = @container.container_number + " has been deleted."
    redirect_to containers_url
  end

  def empty
    @container = Container.find(params[:id])
    flash[:success] = @container.container_number + " is now empty."
    redirect_to containers_url
  end

  private

    def container_params
      # "Revisiting strong parameters"
      params.require(:container).permit(:container_number, :date, :bay, :door_orientation,
      	:carrier_id, :do_received, :entry_number, :ship_voyage, :npi_status_id,
      	:config_received, :priority, :doc_date, :customer_id, :devan_date, :mt_email_sent,
      	:text_comment, :comment_id)
    end

end
