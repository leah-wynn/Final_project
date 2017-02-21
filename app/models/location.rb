class Location < ApplicationRecord
	has_many :producers
	has_many :ghosts

  geocoded_by :address, :latitude  => :lat, :longitude => :lng # ActiveRecord
  after_validation :geocode

  def address
  [street, city, state].compact.join(', ')
end
end
