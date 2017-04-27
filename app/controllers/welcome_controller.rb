class WelcomeController < ApplicationController
  def index
  	@locations = Location.all
  end

  def show
  	@user = User.find(params[:id])

  end

end
