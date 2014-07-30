class StaticPagesController < ApplicationController
  def home
  	# If the user is already signed in then redirect them to the
  	# containers page
	if signed_in?
		redirect_to containers_url
	else
  		render layout: "home"
  	end
  end

  def help
  end

  def about
  end

  def contact
  end
end
