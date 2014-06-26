class ContainersController < ApplicationController

  def new
  	@container = Container.new
  end
  
end
