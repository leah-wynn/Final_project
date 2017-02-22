class Category < ApplicationRecord
	has_many :producers
	has_many :locations
end
