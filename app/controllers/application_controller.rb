class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter :authenticate_user!, :except => [:show, :index]

protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :role, :name, :city, :state, :location_id ])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :role, :name, :city, :state, :location_id ])
end

end
