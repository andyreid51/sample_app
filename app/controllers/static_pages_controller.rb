class StaticPagesController < ApplicationController
  def home
  	render layout: "home"
  end

  def help
  end

  def about
  end

  def contact
  end
end
