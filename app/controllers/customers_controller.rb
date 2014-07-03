class CustomersController < ApplicationController
  
  def index
    @customers = Customer.all
  end

  def new
  	@customer = Customer.new
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      #sign_in @user - removed so new user isn't logged in
      flash[:success] = "Customer Created: " + @customer.acc_name
      redirect_to customers_url
    else
      render 'new'
    end
  end

  def edit
    @customer = Customer.find(params[:id])
  end

  def update
    @customer = Customer.find(params[:id])
    if @customer.update_attributes(customer_params)
      flash[:success] = @customer.acc_name + " updated"
      redirect_to customers_url
    else
      render 'edit'
    end
  end

  def destroy
    @customer = Customer.find(params[:id])
    Customer.find(params[:id]).destroy
    flash[:success] = @customer.acc_name + " has been deleted."
    redirect_to customers_url
  end 

private

    def customer_params
      # might need to remove :role_id from this - see section 9.4.2
      # "Revisiting strong parameters"
      params.require(:customer).permit(:acc_code, :acc_name)
    end

end
