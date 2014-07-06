class ContactsController < ApplicationController

	before_filter :load_carrier

  def new
	 @contact = @carrier.contacts.new
  end

  def create
    @contact = @carrier.contacts.new(contact_params)
    if @contact.save
      flash[:success] = "Contact Created: " + @contact.first_name + " " +
        @contact.last_name
      redirect_to carrier_contacts_url(@carrier)
    else
      render 'new'
    end
  end

  def show

  end

  def index
	 @contacts = @carrier.contacts.all
  end

  def edit
    @contact = @carrier.contacts.find(params[:id])
  end

  def update
    @contact = @carrier.contacts.find(params[:id])
    if @contact.update_attributes(contact_params)
      flash[:success] = @contact.first_name + " " + @contact.last_name + " updated"
      redirect_to carrier_contacts_url(@carrier)
    else
      render 'edit'
    end 
  end

  def destroy
    @contact = @carrier.contacts.find(params[:id])
    @carrier.contacts.find(params[:id]).destroy
    flash[:success] = @contact.first_name + " " + @contact.last_name + " has been deleted."
    redirect_to carrier_contacts_url(@carrier)
  end

  private

  	def contact_params
		params.require(:contact).permit(:first_name, :last_name, :email,
										:carrier_id, :email_notification)
  	end

  	def load_carrier
  		@carrier = Carrier.find(params[:carrier_id])
  	end

end
