class ContainersController < ApplicationController

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

  private

    def container_params
      # "Revisiting strong parameters"
      params.require(:container).permit(:container_number, :date, :bay, :door_orientation,
      	:carrier_id, :do_received, :entry_number, :ship_voyage, :npi_status_id,
      	:config_received, :priority, :doc_date, :customer_id, :devan_date, :mt_email_sent,
      	:text_comment, :comment_id)
    end

end
