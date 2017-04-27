class Location < ApplicationRecord
	has_many :producers
	belongs_to :category

geocoded_by :address
after_validation :geocode
  def address
  [street, city, state].compact.join(', ')
	end
end
